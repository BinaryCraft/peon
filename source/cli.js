export default function cli(require, program, process) {
    program
        .arguments('<generator>')
        .action(function(generatorLocation) {
            let generator = require(generatorLocation).default;
            generator.run();
        }).parse(process.argv);
}
