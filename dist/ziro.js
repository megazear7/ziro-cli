import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function versionCommand(config) {
    console.log(chalk.blue(config.version));
}

function helpCommand(config) {
    console.log(helpMessage$2());
}

const helpMessage$2 = config => `
Commands:
${chalk.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
                          The name should be lowercase with words separated by dashes
${chalk.blue('ziro version')}           :: Get the version of the Ziro cli
${chalk.blue('ziro help')}              :: Get help with the Ziro cli
`;

function notFoundCommand(config) {
    console.log(`No command found: ${chalk.blue('ziro ' + config.command)}`);
}

function createApp (appName) {
    const parts = appName.replace(/-/, ' ')
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substr(1));
    const upperName = parts.join('');
    const prettyName = parts.join(' ');

    execSync(`git clone https://github.com/megazear7/ziro-app.git ${appName}`, { stdio: 'inherit' });
    execSync(`rm -rf ./${appName}/.git`, { stdio: 'inherit' });

    walk(`./${appName}`, (e, results) => {
        if (e) {
            console.error(e);
        }

        results.forEach(result => {
            const oldContent = fs.readFileSync(result, 'utf8');
            let newContent = oldContent
                .replace(/my-app/g, appName)
                .replace(/MyApp/g, upperName)
                .replace(/My App/g, prettyName);
            fs.writeFileSync(result, newContent);
        });
    });
}

var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

function createAppCommand(config) {
    if (config.help) {
        console.log(helpMessage$1());
    } else if (config.args(2)) {
        createApp(config.args(2));
    } else {
        console.log(noCommandMessage$1());
    }
}

const helpMessage$1 = config => `
Create App Commands:
${chalk.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
                          The name should be lowercase with words separated by dashes
`;

const noCommandMessage$1 = config => `
${chalk.blue('ziro create app')} requires a name for the app such as ${chalk.blue('ziro create app my-app')}
`;

function createCommand(config) {
    if (config.help) {
        console.log(helpMessage());
    } else if (config.args(1) === 'app') {
        createAppCommand(config);
    } else if (config.args(1)) {
        console.log(notFoundMessage(config));
    } else {
        console.log(noCommandMessage());
    }
}

const helpMessage = config => `
Create Commands:
${chalk.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
                          The name should be lowercase with words separated by dashes
`;

const notFoundMessage = config => `
${chalk.blue('ziro create')} does not have sub command of ${chalk.blue(config.args(1))}
`;

const noCommandMessage = config => `
${chalk.blue('ziro create')} requires a sub command such as ${chalk.blue('ziro create app')}
`;

function any(arr1, arr2) {
    return arr1.some(r=> arr2.includes(r));
}

const ARGS_QUIET = [ '-q', '--quiet' ];
const ARGS_OPEN = [ '-o', '--open' ];
const ARGS_HELP = [ '-h', '--help' ];

function getConfig(args) {
    return {
        command: args.join(' '),
        args: index => args.length > index ? args[index] : undefined,
        quiet: any(args, ARGS_QUIET) ? true : false,
        open: any(args, ARGS_OPEN) ? true : false,
        help: any(args, ARGS_HELP) ? true : false,
        version: '0.0.3'
    }
}

const VERSION_COMMANDS = [ 'v', 'version', '-v', '--version'];
const HELP_COMMANDS = [ 'h', 'help', '-h', '--help'];
const CREATE_COMMANDS = [ 'c', 'create'];

function cli() {
    const args = process.argv.slice(2);
    const cmd = args[0];
    const config = getConfig(args);

    if (VERSION_COMMANDS.includes(cmd)) {
        versionCommand(config);
    } else if (HELP_COMMANDS.includes(cmd)) {
        helpCommand();
    } else if (CREATE_COMMANDS.includes(cmd)) {
        createCommand(config);
    } else {
        notFoundCommand(config);
    }
}

cli();
