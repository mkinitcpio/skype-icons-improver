const fs = require('fs');
const paths = require('./paths.json');

const {
    unpackSkypeApplication,
    packSkypeApplication,
    installDependencies,
    copyPackedApplication,
    clearTempFolders,
    copyIcons
} = require('./helpers');

const main = async () => {
    const isExist = path => fs.existsSync(path);
    const pathToSkype = paths.skype;

    if (isExist(pathToSkype)) {
        try {
            console.log('Installing dependencies...');
            await installDependencies();
            console.log('Installation is complete!\n----');

            console.log('Unpacking skype packages...');
            await unpackSkypeApplication();
            console.log('Unpacking is complete!\n----');

            console.log('Copying skype tray icons...');
            await copyIcons();
            console.log('Copying is complete!\n----');

            console.log('Packing skype packages...');
            await packSkypeApplication();
            console.log('Packing is complete!\n----');

            console.log('Copying packed application...');
            await copyPackedApplication();
            console.log('Copying is complete!\n----');

            console.log('Clearing temp folders...');
            await clearTempFolders();
            console.log('Clearing is complete!');
        } catch (error) {
            console.log(error);
        }

    } else {
        throw new Error("'Skype for linux' does not exist.");
    }
}

main();