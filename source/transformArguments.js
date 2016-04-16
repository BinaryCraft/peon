import parseArgs from 'minimist';
import * as ErrorTypes from './constants/errorTypes';

function transformArguments(args) {
    const normalizedArgs = args.slice(2);
    if (normalizedArgs[ 0 ] === 'run') {
        return transformValidArguments(normalizedArgs);
    }
    else {
        throw {
            name: ErrorTypes.INVALID_COMMAND,
            message: `'${normalizedArgs[ 0 ]}' is not a valid command`
        };
    }
}

function objectToKeyValuePairArray(obj) {
    let array = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var keyValuePair = [ key, obj[ key ] ];
            array.push(keyValuePair);
        }
    }
}

function extractPath(parsedArgs) {
    const path = parsedArgs._[ 0 ];
    delete parsedArgs._;
    return path;
}

function extractOptions(parsedArgs) {
    return new Map(objectToKeyValuePairArray(parsedArgs));
}

function transformValidArguments(normalizedArgs) {
    let parsedArgs = parseArgs(normalizedArgs.slice(1));
    const path = extractPath(parsedArgs);
    const options = extractOptions(parsedArgs);
    return [ path, options ];
}

export default transformArguments;