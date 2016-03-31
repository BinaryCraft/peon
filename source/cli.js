export default function cli(transformArguments, executeGenerator, process, require) {
    executeGenerator(require, transformArguments(process.argv));
}
