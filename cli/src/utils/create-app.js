import { exec } from 'child_process';

export default function(appName) {
    exec(`git clone https://github.com/megazear7/ziro-app.git ${appName}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}
