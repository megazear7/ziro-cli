const ARGS_QUIET = [ '-q', '--quiet' ];
const ARGS_OPEN = [ '-o', '--open' ];

export default function getConfig(args) {
    return {
        quiet: any(args, ARGS_QUIET) ? true : false,
        open: any(args, ARGS_OPEN) ? true : false
        }
}

function any(arr1, arr2) {
    return arr1.some(r=> arr2.includes(r));
}
