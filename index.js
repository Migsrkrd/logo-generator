// ------------------ Declarations -------------------------------------//
const fs = require("fs");
const inquirer = require("inquirer");
const Circle = require("./lib/circle")
const Square = require("./lib/square")
const Triangle = require("./lib/triangle")

//--------------------------- Create Write File Function -----------------------------//

function writeShapeToFile(filename, shapeFunction){
    fs.writeFile(filename, shapeFunction, (err)=>
    err ? console.error(err) : console.log(`Generated ${filename}`))
}

//--------------------------- Use Inquirer to collect User Input -------------------------------------//

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

//-------------------------- Action for user response ----------------------------------------//

    .then((response)=>{
        const strName = response.Shape.toString()

//--------------------------- Conditional Statements to approve criteria --------------------------//

        if(response.FileName === ""){
            response.FileName = "logo";
        };
        if(response.Letters.length > 3 || response.Letters.length < 1){
            throw new Error(`
                ⚠️⚠️⚠️ 

PLEASE TRY AGAIN WITH NO MORE THAN 3 LETTERS!!!

                ⚠️⚠️⚠️
                `)
        }
        if(response.TextColor === "")
            response.TextColor === "black"
        if(strName === ""){
            throw new Error(`
                ⚠️⚠️⚠️ 

PLEASE TRY AGAIN AND REMEMBER TO SELECT A SHAPE 

                ⚠️⚠️⚠️
                `)
        }
        if(response.ShapeColor === ""){
            response.ShapeColor = "grey"
        }

//------------- Conditional statements to decide which class to utilize ----------//

        if(strName === "Circle"){
            const circleOne = new Circle(response.Letters, response.TextColor, response.Shape, response.ShapeColor)
        writeShapeToFile(`${response.FileName}.svg`, circleOne.generateLogo())
        }
        else if(strName === "Square"){
            const squareOne = new Square(response.Letters, response.TextColor, response.Shape, response.ShapeColor)
            writeShapeToFile(`${response.FileName}.svg`, squareOne.generateLogo())
        }
        else if(strName === "Triangle"){
            const triangleOne = new Triangle(response.Letters, response.TextColor, response.Shape, response.ShapeColor)
            writeShapeToFile(`${response.FileName}.svg`, triangleOne.generateLogo())
        }
    })
    .catch((error)=>{
        console.error(error)
    })