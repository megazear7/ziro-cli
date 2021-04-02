import chalk from 'chalk';
import createApp from '../../utils/create-app.js';

export default function(config) {
    if (config.help) {
        console.log(helpMessage(config));
    } else if (config.args(2)) {
        createApp(config.args(2));
    } else {
        console.log(noCommandMessage(config));
    }
}

const helpMessage = config => `
Create App Commands:
${chalk.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
`;

const noCommandMessage = config => `
${chalk.blue('ziro create app')} requires a name for the app such as ${chalk.blue('ziro create app my-app')}
`;
