const exec = require('child_process').exec;
const paths = require('./paths.json');

const installDependencies = () => new Promise((resolve, reject) =>
    exec('npm i', error => error ? reject(error) : resolve())
);

const unpackSkypeApplication = () => new Promise((resolve, reject) =>
    exec('npm run extract', error => error ? reject(error) : resolve())
);

const copyIcons = () => new Promise((resolve, reject) =>
    exec('yes 2>/dev/null | cp ./src/resources/tray-icons/* ./tmp/extractedCode/images/tray/linux/', error => error ? reject(error) : resolve())
);

const packSkypeApplication = () => new Promise((resolve, reject) =>
    exec('npm run pack', error => error ? reject(error) : resolve())
);

const copyPackedApplication = () => new Promise((resolve, reject) =>
    exec(`sudo cp ./tmp/packedApp/app.asar ${paths.skype}`, error => error ? reject(error) : resolve())
);

const clearTempFolders = () => new Promise((resolve, reject) =>
    exec('rm -rf ./tmp ./node_modules', error => error ? reject(error) : resolve())
);

module.exports = {
    installDependencies,
    unpackSkypeApplication,
    packSkypeApplication,
    copyPackedApplication,
    clearTempFolders,
    copyIcons
};