const fs = require('fs');
const paths = require('./paths.json');

const {
    unpackSkypeApplication,
    installDependencies
} = require('./helpers');

const main = async () => {
    const isExist = path => fs.existsSync(path);
    const pathToSkype = paths.skype;

    if (isExist(pathToSkype)) {

        console.log('Installing dependencies...');
        await installDependencies();
        console.log('The installation is complete!\n----');

        console.log('Unpacking skype packages...');
        await unpackSkypeApplication();
        console.log('Unpacking is complete!');
    } else {
        throw new Error("'Skype for linux' applicaton does not exist");
    }
}

main();