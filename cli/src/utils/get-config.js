import any from './any.js';

const ARGS_QUIET = [ '-q', '--quiet' ];
const ARGS_OPEN = [ '-o', '--open' ];
const ARGS_HELP = [ '-h', '--help' ];

export default function getConfig(args) {
    return {
        command: args.join(' '),
        args: index => args.length > index ? args[index] : undefined,
        quiet: any(args, ARGS_QUIET) ? true : false,
        open: any(args, ARGS_OPEN) ? true : false,
        help: any(args, ARGS_HELP) ? true : false,
        version: '0.0.3'
    }
}
