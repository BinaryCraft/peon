export default function cli(require, generatorLocation) {
    let generator = require(generatorLocation).default;
    generator.run();
}
