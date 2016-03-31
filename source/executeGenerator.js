export default function executeGenerator(require, generatorLocation) {
    let generator = require(generatorLocation).default;
    generator.run();
}
