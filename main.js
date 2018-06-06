const { spawn } = require('child_process');
const fs = require('fs');
const paths = require('./paths.json');

const main = async () => {
    const isExist = path => fs.existsSync(path);
    const pathToSkype = paths.skype;

    if (isExist(pathToSkype)) {
        await installDependencies();
        console.log('The installation is complete!\n----');

        await extractSkypeApplication();
        console.log('Unpacking complete!');
    } else {
        throw new Error("'Skype for linux' applicaton does not exist");
    }
}

const installDependencies = () => new Promise((resolve, reject) => {
    console.log('Installing dependencies...');
    const npm = spawn('npm', ['i']);
    npm.on('error', reject);
    npm.on('close', resolve);
});

const extractSkypeApplication = () => new Promise((resolve, reject) => {
    console.log('Unpacking skype packages...');
    const npm = spawn('npm', ['run', 'extract']);
    npm.stdout.on('error', reject);
    npm.stdout.on('close', resolve);
});

main();