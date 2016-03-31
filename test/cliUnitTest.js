import cli from '../source/cli';

describe(`Given the cli command is loaded`, function() {
    describe(`when the it's executed`, function() {
        let executeGenerator;
        beforeEach(function() {
            executeGenerator = jasmine.createSpy('executeGenerator');
            cli(executeGenerator);
        });

        it(`it should execute the generator`, function() {
            expect(executeGenerator).toHaveBeenCalled();
        });
    });
});