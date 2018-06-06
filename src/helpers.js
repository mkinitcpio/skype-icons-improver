const { spawn } = require('child_process');

const installDependencies = () => new Promise((resolve, reject) => {
    const npm = spawn('npm', ['i']);
    npm.on('error', reject);
    npm.on('close', resolve);
});

const unpackSkypeApplication = () => new Promise((resolve, reject) => {
    const npm = spawn('npm', ['run', 'extract']);
    npm.stdout.on('error', reject);
    npm.stdout.on('close', resolve);
});

module.exports = { installDependencies, unpackSkypeApplication };