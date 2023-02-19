<?php
class SessionHandler
{
    private array $request_times;

    function __construct(private int $requestLimit, private int $timeLimit)
    {
        session_start();
        if(!isset($_SESSION['REQUEST_TIMES'])){
            $_SESSION['REQUEST_TIMES'] = [time()];
            $this->request_times = time();
        } else {
            $this->user_times = $_SESSION['REQUEST_TIMES'];
            #newest hit time in the beggining
            array_unshift($this->request_times, time());
            $this->request_times = array_filter($this->request_times, 'removeOldRequestTimes');

            if(!$this->isLimitReached()){
                $_SESSION['REQUEST_TIMES'] = $this->request_times;
            }
        }
    }

    // public function clearTimestamps($data): array
    // {
    //     for ($i=1; $i < count($data); $i++) { 
    //         if(time() - $data[$i] > $this->hitTimer){
    //             // it will never be 0 because just before checking the timestamp you will add one current timestamp
    //             array_splice($data,$i-1);
    //             break;
    //         }
    //     }
    //     return $data;
    // }

    public function removeOldRequestTimes($timestamp) {
        return time() - $timestamp > $this->timeLimit;
    }

    public function isLimitReached(): bool
    {
        if(count($this->request_times) > $this->requestLimit){
            return true;
        }
        return false;
    }

}