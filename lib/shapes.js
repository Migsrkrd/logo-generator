class Circle{
    constructor(letters, textColor, shape, shapeColor){
        this.letters = letters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor
    }
    generateCircleLogo(){
        return `<svg width="200" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/>
          <text x="15" y="120" font-family="Verdana" font-size="100" fill="${this.textColor}">${this.letters}</text>
        </g>
      </svg>`;
    }
}

module.exports = Circle;