// create file layout provided by instructions
// add in inquirer for questions
// look at svg resources in the readme for more info on the doc type
// 
// use inquirer to gather proper responses
// use the response keys and apply them into shape functions
//shape will be a class
//each object will inherant shape properties
//create a test for each shape

const fs = require("fs");
const inquirer = require("inquirer");
const generateSvg = require("./lib/LogoGenerator")
const Circle = require("./lib/shapes")

function writeToFileCircle(filename, circleFunction){
    fs.writeFile(filename, circleFunction, (err)=>
    err ? console.error(err) : console.log("Success! go checkout your new logo!"))
}

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter three letters that you would like to include in your logo",
            name: "Letters",
        },
        {
            type:"input",
            message: "What would you like the color of those letters to be?",
            name: "TextColor",
        },
        {
            type: "checkbox",
            message: "What shape would you like your logo to be in?",
            choices: ["Circle", "Triangle", "Square"],
            name: "Shape",
        },
        {
            type: "input",
            message: "What color would you like your shape to be?",
            name: "ShapeColor"
        },
        {
            type: "input",
            message: "What would you like to call this file?(one word only)",
            name: "FileName"
        }
    ])

    .then((response)=>{
        if(response.Shape = "Circle"){
            const circleOne = new Circle(response.Letters, response.TextColor, response.Shape, response.ShapeColor)
        writeToFileCircle(`${response.FileName}.svg`, circleOne.generateCircleLogo())
        }
    })