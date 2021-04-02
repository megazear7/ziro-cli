import chalk from 'chalk';
import createAppCommand from './create/app.js';

export default function(config) {
    if (config.help) {
        console.log(helpMessage(config));
    } else if (config.args(1) === 'app') {
        createAppCommand(config);
    } else if (config.args(1)) {
        console.log(notFoundMessage(config));
    } else {
        console.log(noCommandMessage(config));
    }
}

const helpMessage = config => `
Create Commands:
${chalk.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
`;

const notFoundMessage = config => `
${chalk.blue('ziro create')} does not have sub command of ${chalk.blue(config.args(1))}
`;

const noCommandMessage = config => `
${chalk.blue('ziro create')} requires a sub command such as ${chalk.blue('ziro create app')}
`;
