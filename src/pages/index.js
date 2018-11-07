import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "../utils/theme";
import { Box, Text, Heading } from "rebass/emotion";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { scale, rhythm, options } from "../utils/typography";

import shannon from "../../images/shannon-adoringly.jpg";
import ksStanding from "../../images/kyle-shannon-standing.jpg";
import "../../MyFontsWebfontsKit/MyFontsWebfontsKit.css";

const mq = theme.breakpoints.map(bp => `@media (min-width: ${bp}px)`);
console.log({ mq });

const CenterH1 = ({ children, className }) => (
  <h1
    className={className}
    css={{
      textAlign: `center`,
      marginBottom: 0,
      marginTop: 0,
      fontSize: scale(1 + 1 / 5).fontSize,
      [mq[0]]: {
        fontSize: scale(1 + 2 / 5).fontSize,
      },
      [mq[1]]: {
        fontSize: scale(1 + 4 / 5).fontSize,
      },
      [mq[2]]: {
        fontSize: scale(2 + 1 / 5).fontSize,
      },
      [mq[3]]: {
        fontSize: scale(2 + 2 / 5).fontSize,
      },
      [mq[4]]: {
        fontSize: scale(2 + 3 / 5).fontSize,
        lineHeight: 0.95,
      },
    }}
  >
    {children}
  </h1>
);

const CenterH2 = ({ children }) => (
  <h2
    css={{
      textAlign: `center`,
      fontWeight: 400,
      marginBottom: 0,
      fontSize: scale(1 / 5).fontSize,
      [mq[1]]: {
        fontSize: scale(2 / 5).fontSize,
      },
      [mq[2]]: {
        fontSize: scale(3 / 5).fontSize,
      },
      [mq[3]]: {
        fontSize: scale(4 / 5).fontSize,
      },
      [mq[4]]: {
        fontSize: scale(1).fontSize,
      },
    }}
  >
    {children}
  </h2>
);
const Li = ({ children }) => (
  <div
    css={{
      fontFamily: options.headerFontFamily.join(`,`),
      display: `inline-block`,
      marginLeft: rhythm(1 / 4),
      marginRight: rhythm(1 / 4),
      fontSize: scale(-1 / 5).fontSize,
      [mq[1]]: {
        fontSize: scale(0).fontSize,
      },
      [mq[2]]: {
        fontSize: scale(1 / 5).fontSize,
        marginLeft: rhythm(1 / 2),
        marginRight: rhythm(1 / 2),
      },
      [mq[3]]: {
        marginLeft: rhythm(1),
        marginRight: rhythm(1),
      },
    }}
  >
    {children}
  </div>
);

const App = ({ data }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Box css={{ position: `relative`, overflow: `hidden` }}>
        <Img
          css={{
            display: `block`,
            [mq[1]]: { display: `none` },
          }}
          fluid={data.small.childImageSharp.fluid}
        />
        <Img
          css={{
            display: `none`,
            [mq[1]]: { display: `block` },
            [mq[3]]: { display: `none` },
          }}
          fluid={data.medium.childImageSharp.fluid}
        />
        <Img
          css={{
            display: `none`,
            [mq[3]]: { display: `block` },
          }}
          fluid={data.large.childImageSharp.fluid}
        />
        <Box
          p={[4]}
          css={{
            position: `absolute`,
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <nav
            css={{
              display: `flex`,
              justifyContent: `center`,
              marginBottom: rhythm(1 / 2),
            }}
          >
            <Li>
              <a
                css={{ color: `inherit`, textDecoration: `none` }}
                href="#our-story"
              >
                Our Story
              </a>
            </Li>
            <Li>
              <a
                css={{ color: `inherit`, textDecoration: `none` }}
                href="#venues"
              >
                Venues
              </a>
            </Li>
            <Li>
              <a
                css={{ color: `inherit`, textDecoration: `none` }}
                href="#registry"
              >
                Gift Registry
              </a>
            </Li>
            <Li>
              <a
                css={{ color: `inherit`, textDecoration: `none` }}
                href="#rsvp"
              >
                RSVP
              </a>
            </Li>
          </nav>
          <Box
            css={{
              [mq[4]]: {
                paddingLeft: rhythm(4),
                paddingRight: rhythm(10),
                paddingTop: rhythm(5),
                width: rhythm(35),
              },
            }}
          >
            <CenterH1 css={{ marginBottom: rhythm(1 / 2) }}>
              Shannon & Kyle
            </CenterH1>
            <CenterH2>are getting married November 24, 2018</CenterH2>
          </Box>
        </Box>
      </Box>
      <Box css={{ maxWidth: rhythm(25), margin: `0 auto` }} p={[4, 12]}>
        <h1 id="our-story">Our Story</h1>
        <p>Check back this weekend for the deets!</p>
        <h1 id="venues">Venues & Schedule</h1>
        <p>
          <em>Note about fragrances:</em>
        </p>
        <p>
          There will be wedding attendees with severe chemical sensitivities. We
          kindly ask that you refrain from using artificial fragrances on our
          wedding day (perfumes, colognes, lotions, hairspray, etc. Natural
          fragrances like essential oils are fine 😀
        </p>
        <h2>Wedding ceremony & photos</h2>
        <p>
          <strong>Location:</strong> Provo City Center Temple, 50 South
          University Ave, Provo UT 84601{" "}
          <a href="https://www.lds.org/temples/details/provo-city-center-temple">
            website
          </a>
        </p>
        <h3>Schedule:</h3>
        <dl>
          <dt>12:30-2:30 pm</dt> <dd>Small ceremony for close family</dd>
          <dt>2:30-3:00 pm</dt>{" "}
          <dd>
            Photos outside the temple within anyone who’d like to be there
          </dd>
          <dt>3:00-4:00 pm</dt>{" "}
          <dd>The happy couple will be taking more couple photos</dd>
        </dl>
        <h4>Ideas for what to do until the reception at 5:00 pm</h4>
        <ul>
          <li>
            Stroll around the temple grounds or Provo Center Street to site see
            or visit shops
          </li>
          <li>
            Go to the reception center early (it’s within 3-5 mins. walking
            distance of the temple!) to relax on couches or help set up final
            decorations
          </li>
        </ul>
        <h2>Reception</h2>
        <p>
          <strong>Location</strong>: Southworth Hall, 116 W Center St, Provo, UT
          84601 <a href="http://southworthhall.com/">website</a>
        </p>
        <h3>Schedule:</h3>
        <dl>
          <dt>5:00–6:00 pm</dt>
          <dd>Reception line to great the happy couple and their families!</dd>
          <dt>6:00–6:30 pm</dt>
          <dd>
            The happy couple will be eating with their families at a table
          </dd>
          <dt>6:30–7:00 pm</dt>
          <dd>
            The happy (and fading, fatiguing) couple will mingle, relax, wander,
            socialize
          </dd>
          <dt>7:00 pm</dt>
          <dd>Cake cutting, simultaneous bouquet toss + boutonniere toss</dd>
          <dt>7:15–7:45 pm</dt>
          <dd>Music and dancing</dd> <dt>7:45 pm</dt>{" "}
          <dd>Send the happy couple off with something like bubbles!</dd>
        </dl>
        <h1 id="rsvp">RSVP</h1>
        <p>
          Please{" "}
          <a
            href="https://goo.gl/forms/Pvtw07KwpudKbxCx1"
          >
            click here to RSVP if you haven’t yet!
          </a>
        </p>
        <p>
          Please RSVP so we can estimate how much food to order and keep track
          of your addresses to send you thank you notes later!
        </p>
        <h1 id="registry">Gift Registry</h1>
        <p>
          Please{" "}
          <a
            href="https://registry.theknot.com/shannon-soper-kyle-mathews-november-2018-
        ut/29671456?_ref_val_=https%3A%2F%2Fwww.theknot.com%2Fregistry%2Fcouplese
        arch%3Flt%3DSearchResults%26a%3D994%26st%3DSearchWidget%26ss%3DTNK_
        Homepage%26sp%3DFindRegistryAndWWS%23firstName%3Dshannon%26lastName
        %3Dsoper%26eventMonth%3D11%26eventYear%3D2018%26reset%3Dtrue%26track
        %3Dtrue%26offset%3D0"
          >
            click here to view our registry on The Knot’s website
          </a>
        </p>
        <p>
          You can do group gifts and cash gifts (called “The newlywed fund”) if
          you’d like! All gifts will be sent to our new address in Berkeley, CA.
        </p>
      </Box>
    </React.Fragment>
  </ThemeProvider>
);

export default App;

export const query = graphql`
  {
    small: file(relativePath: { eq: "ks-standing-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medium: file(relativePath: { eq: "kyle-shannon-standing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    large: file(relativePath: { eq: "ks-standing-large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
