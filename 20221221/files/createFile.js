function createFile(fileSystem, fileName, fileContent) {
    fileSystem.writeFile(fileName, fileContent, function(err) {
        if (err) {
            throw err;
        } 
        console.log(`File ${fileName} with ${fileContent} was created successfully!`);
    });
}

module.exports.createFile = createFile;