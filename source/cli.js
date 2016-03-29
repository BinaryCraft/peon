export default function cli(require, program, process) {
    program
        .arguments('<generator>')
        .action(function(generatorLocation) {
            require(generatorLocation);
        }).parse(process.argv);
}
