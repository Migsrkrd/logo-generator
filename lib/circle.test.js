const Circle = require("../lib/circle")


describe("generateLogo", () => {
    it("should take in three elements and input them into a template literal", () => {
        const example = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="100" cy="100" r="100" fill="grey"/>
          <text dominant-baseline="middle" text-anchor="middle" x="100" y="100" font-family="Verdana" font-size="500%" fill="red">SVG</text>
        </g>
      </svg>`;
        const circle = new Circle("SVG", "red", "circle", "grey").generateLogo();
        expect(circle).toEqual(example);
    })
})
