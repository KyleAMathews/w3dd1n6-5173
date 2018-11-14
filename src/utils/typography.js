import Typography from "typography";

const typography = new Typography({
  baseFontSize: `18px`,
  headerFontFamily: [`Benguiat`],
  bodyFontFamily: [`Benguiat`],
  blockMarginBottom: 0.666,
  overrideStyles: ({ rhythm }, options) => ({
    a: {
      color: "#28517f",
    },
    li: {
      marginBottom: rhythm(1 / 4),
    },
    h3: {
      marginBottom: rhythm(1 / 2),
    },
    h4: {
      fontStyle: `italic`,
      fontFamily: `ITC Benguiat Pro Book`,
    },
    h1: {
      marginTop: rhythm(3 / 2),
    },
    dd: {
      marginBottom: rhythm(1 / 2),
    },
    p: {
      marginBottom: rhythm(options.blockMarginBottom),
    },
    ".gatsby-image-wrapper": {
      marginBottom: rhythm(1 / 8),
    },
  }),
});

console.log(typography.options);

typography.injectStyles();

export const rhythm = typography.rhythm;
export const options = typography.options;
export const scale = typography.scale;

export default typography;
