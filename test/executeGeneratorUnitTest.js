import executeGenerator from '../source/executeGenerator';

describe(`Given the executeGenerator function is executed`, function() {
    let requireSpy, path_to_generator, generator;

    beforeEach(function() {
        generator = jasmine.createSpyObj('generator', [ 'run' ]);

        requireSpy = jasmine.createSpy('require');

        requireSpy.and.callFake(function() {
            return {
                default: generator
            };
        });
    });

    describe(`with the path to the generator and the name of the generator`, function() {

        beforeEach(function() {
            path_to_generator = './does_everything/magic_generator';
            executeGenerator(requireSpy, path_to_generator);
        });

        it(`it should execute that generator`, function() {
            expect(generator.run).toHaveBeenCalledWith();
        });
    });
});