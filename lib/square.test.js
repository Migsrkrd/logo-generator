const Square = require("../lib/square")


describe("generateLogo", () => {
    it("should take in three elements and input them into a template literal", () => {
        const example = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="0" y="0" width="200" height="200" fill="grey"></rect>
          <text dominant-baseline="middle" text-anchor="middle" x="100" y="100" font-family="Verdana" font-size="500%" fill="red">SVG</text>
        </g>
      </svg>`;
        const square = new Square("SVG", "red", "circle", "grey").generateLogo();
        expect(square).toEqual(example);
    })
})