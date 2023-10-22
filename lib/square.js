class Square{
    constructor(letters, textColor, shape, shapeColor){
        this.letters = letters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor
    }
    generateSquareLogo(){
        return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}"></rect>
          <text dominant-baseline="middle" text-anchor="middle" x="100" y="100" font-family="Verdana" font-size="500%" fill="${this.textColor}">${this.letters}</text>
        </g>
      </svg>`;
    }
}

module.exports = Square;