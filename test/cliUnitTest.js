import cli from '../source/cli';

describe(`Given the cli is loaded`, function() {
    describe(`when it's executed with arguments`, function() {
        let process, executeGenerator, transformArguments,
            fakeArguments = 'someFakeArguments',
            fakeTransformedArguments = [ 'pathToGenerator', 'options' ];

        beforeEach(function() {
            process = {};
            process.argv = fakeArguments;
            executeGenerator = jasmine.createSpy('executeGenerator');
            transformArguments = jasmine.createSpy('transformArguments');

            transformArguments.and.returnValue(fakeTransformedArguments);

            cli(transformArguments, executeGenerator, process, require);
        });

        it(`it should transform the commandline arguments`, function() {
            expect(transformArguments).toHaveBeenCalledWith(fakeArguments);
        });

        it(`it should execute the generator with the result of transformArguments()`, function() {
            expect(executeGenerator).toHaveBeenCalledWith(require, ...fakeTransformedArguments);
        });
    });
});