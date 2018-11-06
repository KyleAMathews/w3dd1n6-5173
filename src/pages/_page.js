import React from "react";
import { Box } from "rebass/emotion";
import { rhythm } from "../utils/typography";

import kyleShannonBerlinWall from "../../images/kyle-shannon-berlin-wall.jpg";
import ksFlowers from "../../images/ks-flowers.jpg";
import ksHipsters from "../../images/hipsters.jpg";

export default () => (
  <React.Fragment>
    <Box
      css={{
        display: "grid",
        gridTemplateColumns: `repeat(5, ${rhythm(10)})`,
        gridTemplateRows: `repeat(5, ${rhythm(10)})`,
      }}
    >
      <Box
        fontSize={7}
        css={{
          alignSelf: `center`,
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
        }}
      >
        Kyle
      </Box>
      <Box
        fontSize={7}
        css={{ alignSelf: `center`, gridColumnStart: 2, gridRowStart: 2 }}
      >
        💜
      </Box>
      <Box
        fontSize={7}
        css={{
          alignSelf: `center`,
          gridColumnStart: 2,
          gridColumnEnd: 4,
          gridRowStart: 3,
        }}
      >
        Shannon
      </Box>
      <Box css={{ gridColumnStart: 4, gridRowStart: 1 }}>
        <img src={ksHipsters} />
      </Box>
      <Box css={{ gridColumnStart: 4, gridRowStart: 3 }}>
        <img src={kyleShannonBerlinWall} />
      </Box>
      <Box css={{ gridColumnStart: 3, gridRowStart: 2 }}>
        <img src={ksFlowers} />
      </Box>
    </Box>
  </React.Fragment>
);
