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

`peon [path-to-generator]`

### Example 

`peon './My_Generator'`

### Writing generators

Peon only requires 1 thing of you:
- Your generator should return an object with a `.run()` functions kicks of the generator;  
