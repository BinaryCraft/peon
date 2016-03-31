import cli from '../source/cli';

describe(`Given the cli command is loaded`, function() {
    describe(`when it's executed`, function() {
        let executeGenerator, processArguments;
        beforeEach(function() {
            executeGenerator = jasmine.createSpy('executeGenerator');
            processArguments = jasmine.createSpy('processArguments');
            cli(processArguments, executeGenerator);
        });

        it(`it should process the commandline arguments`, function() {
            expect(processArguments).toHaveBeenCalled();
        });

        it(`it should execute the generator`, function() {
            expect(executeGenerator).toHaveBeenCalled();
        });
    });
});