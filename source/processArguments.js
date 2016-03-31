import parseArgs from 'minimist';
import * as ErrorTypes from '../source/constants/errorTypes';

function objectToKeyValuePairArry(obj) {
    let array = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var keyValuePair = [ key, obj[ key ] ];
            array.push(keyValuePair);
        }
    }
}

export default function processArguments(args) {
    const normalizedArgs = args.slice(2);
    if (normalizedArgs[ 0 ] === 'run') {
        let parsedArgs = parseArgs(normalizedArgs.slice(1));
        const path = parsedArgs._[ 0 ];
        delete parsedArgs._;
        const keyValuePairArray = objectToKeyValuePairArry(parsedArgs);
        const options = new Map(keyValuePairArray);
        return { path, options };
    } else {
        throw {
            name: ErrorTypes.INVALID_COMMAND,
            message: `'${normalizedArgs[0]}' is not a valid command`
        };
    }
}