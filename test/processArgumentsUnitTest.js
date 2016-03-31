import processArguments from '../source/processArguments';
import * as ErrorTypes from '../source/constants/errorTypes';

describe(`Given the processArguments function is executed with arguments and help text`, function() {
    let args, result, expectedResult;

    describe(`with 'run' at position 3rd position`, function() {
        let generatorPath = '/generatorPath';

        beforeEach(function() {
            args = [ '/Users/Marthinus/.nvm/versions/node/v5.9.0/bin/node',
                '/Users/Marthinus/.nvm/versions/node/v5.9.0/bin/peon',
                'run',
                generatorPath,
                '--argument1',
                'value1',
                '--argument2',
                'value2',
                '--argument3',
                '--argument4',
                'value4' ];
            result = processArguments(args);
        });

        it(`it should return the options and the path to the generator`, function() {

            let optionsMap = new Map([
                [ 'argument1', 'value1' ],
                [ 'argument2', 'value2' ],
                [ 'argument3', 'true' ],
                [ 'argument4', 'value4' ]
            ]);

            expectedResult = {
                path: generatorPath,
                options: optionsMap
            };

            expect(result).toEqual(expectedResult);
        });

    });

    describe(`with 'run' not at the 3rd position`, function() {
        args = [ '/Users/Marthinus/.nvm/versions/node/v5.9.0/bin/node',
            '/Users/Marthinus/.nvm/versions/node/v5.9.0/bin/peon',
            '--argument1',
            'value1',
            '--argument2',
            'value2',
            '--argument3',
            '--argument4',
            'value4' ];

        const error = {
            name: ErrorTypes.INVALID_COMMAND,
            message: `'${args[2]}' is not a valid command`
        };

        it(`it should throw an error`, function() {
            expect(processArguments.bind(this, args)).toThrow(error);
        });
    });
});

