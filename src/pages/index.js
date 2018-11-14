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
        <h1 id="our-story">Our Story — or how the Shyle came to be…</h1>
        <h3>September, 2008</h3>
        <p>Shannon and Kyle meet at college @ BYU</p>
        <h3>October 31, 2008</h3>
        <Img fluid={data.party.childImageSharp.fluid} />
        <p>
          <em>
            The first known photo of Shannon and Kyle at a Halloween party (see if you can find Kyle in the photo! Hint: he's wearing a vest)
          </em>
        </p>
        <h3>May, 2009</h3>
        <p>Kyle and Shannon go on a double date with… each other's roommates!</p>
        <p>
          Shannon says she wants to edit a science journal. Kyle thinks: “What
          an attractive woman!”
        </p>
        <h3>July 2009</h3>
        <Img fluid={data.garden.childImageSharp.fluid} />
        <p>
          <em>
            Shannon hears that Kyle planted a garden behind his neighbor’s house
            and asks to go see it. The garden is more impressive than she
            expected.
          </em>
        </p>
        <h3>August 2009</h3>
        <p>
          Kyle texts Shannon to ask her on a date and she doesn't respond for
          several weeks because her phone is broken. 😅
        </p>
        <p>They plan to go on another date, and then this happens:</p>
        <p>
          <strong>Shannon:</strong>
          {` `}
          “Kyle, I have to reschedule our date. I’m in the hospital with
          appendicitis and go into surgery in 45 minutes.”
        </p>
        <p>
          <strong>Kyle:</strong> “That is the best excuse I’ve ever heard for
          rescheduling a date! Good luck!”
        </p>
        <p>
          {" "}
          They finally go on date a few days after Shannon has her appendix out.
          Shannon was probably on pain killers. Neither of them remember the
          events of the date.
        </p>
        <h3>October 2009</h3>
        <p>Shannon exits to Southern California for a 1.5 year LDS mission.</p>
        <h3>January 2011</h3>
        <p>Kyle exits to Northern California to chase startup dreams.</p>
        <h3>May 2015</h3>
        <p>
          It’s been 6 years since we last talked, and then Shannon follows Kyle
          on Spotify and thinks a song he's listening to is cool. Listen to the song below!
        </p>
        <iframe
          src="https://open.spotify.com/embed/track/01txDiOnBPfMrVQwPQtDHR"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <p>
          After listening to the song and messaging Kyle to tell him how cool the song is, Shannon does some mild Facebook  stalking and realizes that Kyle lives in San Francisco.
          Since she’s already planning on road tripping through California with
          her awesome friend Liz, she messages him on Facebook to see if he wants to hang out.
        </p>
        <h3>July 4, 2015</h3>
        <Img fluid={data.sf.childImageSharp.fluid} />
        <p>
          <em>Liz, Shannon, and Kyle feeling post-Thai food happiness in San Fran!</em>
        </p>
        <h3>March 3, 2016</h3>
        <p>
          <a href="https://www.meetup.com/UtahJS/events/228305929/">
            UtahJS meetup:
          </a>{" "}
          Shannon goes to see Kyle speak on{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a> @ Startup building in
          Provo, UT
        </p>
        <h3>March 11, 2016</h3>
        <p>
          <strong>Sneaky Skype “date”</strong> — Kyle sneaks in Skype “date”
          under guise of asking Shannon's help with his startup.
        </p>
        <p>
          <strong>Shannon:</strong> I remember thinking “hm, we’ve been talking
          for an hour and still no talk about business…” ;)
        </p>
        <h3>April 24, 2016</h3>
        <p>
          <strong>Thai food and hike date.</strong>
        </p>
        <h3>November 26, 2016</h3>
        <p>
          <strong>Mexican treat place date</strong> — Shannon takes Kyle to her
          parent’s house. Kyle impresses parents with knowledge of construction
          terms like
          {` `}
          <a href="https://en.wikipedia.org/wiki/I-beam">“i-beam”</a>.
        </p>
        <h3>July 2017</h3>
        <p>
          <strong>Dinner and bike ride date.</strong>
        </p>
        <h3>August 21, 2017</h3>
        <p>
          Shannon invites Kyle to go watch the
          solar eclipse in Idaho with her and her friends.
        </p>
        <Img fluid={data.eclipse.childImageSharp.fluid} />
        <p>
          <em>Mid-way through the total eclipse in Rexburg, Idaho</em>
        </p>
        <h3>August 2017 — February 2018</h3>
        <p>
          Shannon and Kyle go on intermittent dates and flail around for a while, sorting through their
          feelings, until they decide to start dating in earnest in February 2018.{" "}
        </p>
        <h3>February 2018 — now</h3>
        <p>
          Turns out dating each other is fantastic! So fantastic, we're getting
          married! 😍
        </p>
        <Img fluid={data.berlin.childImageSharp.fluid} />
        <p>
          <em>Kyle and Shannon touring Berlin in May 2018</em>
        </p>

        <h1 id="venues">Venues & Schedule</h1>
        <p>
          <em>Note about fragrances:</em>
        </p>
        <p>
          There will be wedding attendees with severe chemical sensitivities. We
          kindly ask that you refrain from using artificial fragrances on our
          wedding day (perfumes, colognes, lotions, hairspray, etc). Natural
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
            Photos outside the temple with anyone who’d like to be there
          </dd>
          <dt>3:00-4:00 pm</dt>{" "}
          <dd>The happy couple will be taking more couple photos</dd>
        </dl>
        <h4>Ideas for what to do until the reception at 5:00 pm</h4>
        <ul>
          <li>
            Stroll around the temple grounds or Provo Center Street to sightsee
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
          <dd>Reception line to greet the happy couple and their families!</dd>
          <dt>6:00–6:30 pm</dt>
          <dd>
            The happy couple will be eating with their families
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
          <a href="https://goo.gl/forms/Pvtw07KwpudKbxCx1">
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
    party: file(relativePath: { eq: "shannon-kyle-2009.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garden: file(relativePath: { eq: "kyle-garden-2009.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sf: file(relativePath: { eq: "shyle-sf-2015.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eclipse: file(relativePath: { eq: "eclipse.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berlin: file(relativePath: { eq: "shyle-berlin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
