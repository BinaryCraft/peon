import cli from '../source/cli';

describe(`Given the cli command is loaded`, function() {
    describe(`when the it's executed`, function() {
        let requireSpy, processSpy, program, path_to_generator;

        beforeEach(function() {
            program = jasmine.createSpyObj('program', [ 'arguments', 'action', 'parse' ]);
            program.arguments.and.callFake(function() {
                return program;
            });

            program.action.and.callFake(function(func) {
                func(path_to_generator);
                return program;
            });

            requireSpy = jasmine.createSpy('require');

            processSpy = {
                argv: [ '/Users/Marthinus/.nvm/versions/node/v5.9.0/bin/node',
                    '/Users/Marthinus/.nvm/versions/node/v5.9.0/bin/peon',
                    path_to_generator ]
            };
        });

        describe(`with the path to the generator`, function() {

            beforeEach(function() {
                path_to_generator = './does_everything/magic_generator';
                cli(requireSpy, program, processSpy);
            });

            it(`it should execute that generator`, function() {
                expect(requireSpy).toHaveBeenCalledWith(path_to_generator);
            });
        });
    });

});