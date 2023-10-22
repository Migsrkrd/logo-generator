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
const Circle = require("./lib/circle")
const Square = require("./lib/square")
const Triangle = require("./lib/triangle")

function writeShapeToFile(filename, shapeFunction){
    fs.writeFile(filename, shapeFunction, (err)=>
    err ? console.error(err) : console.log(`Generated ${filename}`))
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
        // console.log(response)
        const strName = response.Shape.toString()
        if(response.FileName === ""){
            response.FileName = "logo";
        };
        if(response.Letters.length > 3 || response.Letters.length < 1){
            return console.error(`
                ⚠️⚠️⚠️ 

PLEASE TRY AGAIN WITH NO MORE THAN 3 LETTERS!!!

                ⚠️⚠️⚠️
                `)
        }
        if(response.TextColor === "")
            response.TextColor === "black"
        if(strName === ""){
            return console.error(`
                ⚠️⚠️⚠️ 

PLEASE TRY AGAIN AND REMEMBER TO SELECT A SHAPE 

                ⚠️⚠️⚠️
                `)
        }
        if(response.ShapeColor === ""){
            response.ShapeColor = "grey"
        }
        if(strName === "Circle"){
            const circleOne = new Circle(response.Letters, response.TextColor, response.Shape, response.ShapeColor)
        writeShapeToFile(`${response.FileName}.svg`, circleOne.generateCircleLogo())
        }
        else if(strName === "Square"){
            const squareOne = new Square(response.Letters, response.TextColor, response.Shape, response.ShapeColor)
            writeShapeToFile(`${response.FileName}.svg`, squareOne.generateSquareLogo())
        }
        else if(strName === "Triangle"){
            const triangleOne = new Triangle(response.Letters, response.TextColor, response.Shape, response.ShapeColor)
            writeShapeToFile(`${response.FileName}.svg`, triangleOne.generateTriangleLogo())
        }
    })