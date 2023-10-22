class Triangle{
    constructor(letters, textColor, shape, shapeColor){
        this.letters = letters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor
    }
    generateTriangleLogo(){
        return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
        <polygon points="100 0, 200 200, 0 200" fill="${this.shapeColor}"/>
        <text dominant-baseline="middle" text-anchor="middle" x="100" y="150" font-family="Verdana" font-size="55" fill="${this.textColor}">${this.letters}</text>
        </g>
      </svg>`;
    }
}

module.exports = Triangle;