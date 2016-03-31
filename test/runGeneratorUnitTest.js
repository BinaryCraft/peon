import executeGenerator from '../source/executeGenerator';

describe(`Given the runGenerator function is executed`, function() {
    let requireSpy, processSpy, program, path_to_generator, generator;

    beforeEach(function() {
        generator = jasmine.createSpyObj('generator', [ 'run' ]);

        requireSpy = jasmine.createSpy('require');

        requireSpy.and.callFake(function() {
            return {
                default: generator
            };
        });
    });

    describe(`with the path to the generator`, function() {

        beforeEach(function() {
            path_to_generator = './does_everything/magic_generator';
            executeGenerator(requireSpy, path_to_generator);
        });

        it(`it should execute that generator`, function() {
            expect(generator.run).toHaveBeenCalledWith();
        });
    });
});