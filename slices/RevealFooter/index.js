/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui";
import { array, shape } from "prop-types";

import Heading from "../../components/heading";
import Link from "../../components/link";
import SocialLinks from "../../components/social-links";

const RevealFooterSlice = ({ slice: { primary } }) => {
  const socialChannels = [
    "behance",
    "dribbble",
    "github",
    "linkedin",
    "twitter",
    "youtube"
  ]
  .filter(channel => primary.hasOwnProperty(channel) && !!primary[channel].url)
  .map(channel => ({
    name: channel,
    url: primary[channel].url
  }))


  return (
    <Styled.div
      as="footer"
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "100%",
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px'
      }}
    >
      <Flex sx={{
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${primary.image.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        alignItems: 'center',
        justifyContent: 'center',

        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
        }
      }}>
        <Box sx={{
          zIndex: 1,
        }}>
          <Heading level={3}>
            <Link
              href={primary.link.url}
            >{primary.ctaLabel}</Link>
          </Heading>
        </Box>
      </Flex>
      <SocialLinks
        channels={socialChannels}
        styles={{
          fontSize: '24px',
          margin: '0 10px 0 0'
        }}
      />
    </Styled.div>
  );
};

RevealFooterSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired
    }).isRequired
  }).isRequired
};

export default RevealFooterSlice;
