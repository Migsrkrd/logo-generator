const Triangle = require("../lib/triangle")


describe("generateSquareLogo", () => {
    it("should take in three elements and input them into a template literal", () => {
        const example = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
        <polygon points="100 0, 200 200, 0 200" fill="grey"/>
        <text dominant-baseline="middle" text-anchor="middle" x="100" y="150" font-family="Verdana" font-size="55" fill="red">SVG</text>
        </g>
      </svg>`;
        const triangle = new Triangle("SVG", "red", "circle", "grey").generateTriangleLogo();
        expect(triangle).toEqual(example);
    })
})