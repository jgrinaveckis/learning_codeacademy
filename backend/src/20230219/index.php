<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Redirect</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header d-flex align-items-center justify-content-center">
                <h4 class="card-title m-2">URL</h4>
            </div>
            <div class="card-body">
                <form id="url">
                    <div class="row">
                        <div class="col-auto">
                            <label for="url-input" class="col-form-label">
                                Insert URL
                            </label>
                        </div>
                        <div class="col-auto">
                            <input type="url" class="form-control" name="input-url" id="input-url" required>
                        </div>
                        <div class="col-auto">
                            <button type="button" name="button-redirect" id="button-redirect" class="btn btn-primary">
                                Redirect
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Shortened URL</th>
                    <th scope="col" colspan='2'>URL</th>
                </tr>
            </thead>
            <tbody id='tbody'>
                <!-- generate some trows -->
                <?php

                $filePath = 'files/urllist.json';
                if (!file_exists($filePath)) {
                    file_put_contents($filePath, '');
                }
                $data = file_get_contents($filePath);
                $data = json_decode($data, true);
                foreach ($data as $key => $value) {
                    echo '<tr>';
                    echo '<td scope="row">'. $key+1 .'</td>';
                    echo '<td><a href="http://localhost/src/20230219/redirect.php?code='.$value['code'].'">'.$value['code'].'</a></td>';
                    echo '<td>'.$value['url'].'</td>';
                    echo '</tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
    <script src="app.js"></script>
</body>
</html>