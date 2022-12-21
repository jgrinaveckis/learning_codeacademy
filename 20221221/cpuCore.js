function getCpuCore(os) {

    const cpuCores = os.cpus();

    let cpu = cpuCores[0].model;
    let numCores = cpuCores.length;

    console.log(`CPU: ${cpu}`);
    console.log(`Number of cores: ${numCores}`);
}

module.exports.getCpuCore = getCpuCore;
