### About

![Automate Everything](./peon.png) 
 
> Hi. I'm your peon. 
> I'm inspired by [yeoman](http://yeoman.io/), but I'm not very opinionated. I'll do any work that you deem menial or unskilled in the way you want me to.
> P.S: Master. May I humble ask? If you can draw me better will you please do a pull-request? Thanks.  

Definition of peon
:  a person who does hard or dull work for very little money

### Install

`npm install peon --global`

### Usage

`peon run <path-to-generator> [generator_options]`

`<path-to-generator>`: The path to the generator
`[generator_options]`: Options that will be passed to the generator, see below [example](#Example)


### Example 

`peon './My_Generator' --name 'magically_generated_component__name' --packageJSON` 

This will run the generator at './My_Generator' and pass the options `--name` and `--packageJSON` to the generators `.run()` function 

### Writing generators

Peon only requires 1 thing of you. Your generator should return an object with a `.run(options)` function that takes the generator options as an argument and kicks off the generator. What you do with the options and how you implement your generator is none of peon's business
