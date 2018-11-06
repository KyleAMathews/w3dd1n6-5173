import { rhythm, scale, options } from "./typography";

const space = ratio => rhythm(options.blockMarginBottom * ratio);
const size = s => scale(s).fontSize;
console.log(size(2));

export default {
  breakpoints: [450, 576, 768, 992, 1200],
  fontFamilies: {
    header: options.headerFontFamily.join(`, `),
    body: options.bodyFontFamily.join(`, `),
  },
  fontSizes: [
    size(-2 / 5),
    size(-1 / 5),
    size(0),
    size(1 / 5),
    size(2 / 5),
    size(3 / 5),
    size(1),
    size(2),
  ],
  space: [
    0,
    space(0.25),
    space(0.5),
    space(0.75),
    space(1),
    space(1.25),
    space(1.5),
    space(1.75),
    space(2),
    space(2.25),
    space(2.5),
    space(2.75),
    space(3),
    space(4),
    space(5),
    space(6),
  ],
};
