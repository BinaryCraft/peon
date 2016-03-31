export default function cli(transformArguments, executeGenerator, process) {
    executeGenerator(transformArguments(process.argv));
}
