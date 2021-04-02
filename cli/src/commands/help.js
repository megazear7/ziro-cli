import chalk from 'chalk';

export default function(config) {
    console.log(helpMessage(config));
}

const helpMessage = config => `
Commands:
${chalk.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
                          The name should be lowercase with words separated by dashes
${chalk.blue('ziro version')}           :: Get the version of the Ziro cli
${chalk.blue('ziro help')}              :: Get help with the Ziro cli
`;
