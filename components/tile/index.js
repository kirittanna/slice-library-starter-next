/** @jsx jsx */
import { Avatar, Badge, Box, Flex, jsx, Text } from "theme-ui";
import { array, string } from 'prop-types'
import Heading from "../heading";
import Link from "../link";

const styles = {
  content: {
    flex: 1,
    marginBottom: '10px'
  },
  text: {
    width: '100%',
  },
  header: {
    justifyContent: "space-between",
    marginRight: "10px"
  }
};

const Tile = ({
  avatar,
  cta,
  image,
  link,
  overlayColor,
  overlayColorStart,
  overlayColorEnd,
  summary,
  tags,
  title
}) => {
  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: 20,
      overflow: 'hidden'
    }}>
      <Flex
        sx={{
          position: "relative",
          flexDirection: "column",
          alignContent: "space-between",
          height: "100%",
          padding: "20px",
          zIndex: 21
        }}
      >
        <Flex className="header" sx={styles.header}>
          <Box>
            <Heading level={3}>
              {title}
            </Heading>
          </Box>
          <Box>
            <Avatar src={avatar} />
          </Box>
        </Flex>
        <Box sx={styles.content}>
          <Text sx={styles.text}>
            {summary}
          </Text>
        </Box>
        <Flex
          className="footer"
          sx={{
            justifyContent: 'space-between',
            flexShrink: 0,
            marginTop: "auto",
            zIndex: 22,
            flexDirection: 'column',

            '@media screen and (min-width: 62em)': {
              flexDirection: 'row'
            }
          }}
        >
          <Box sx={{
            marginBottom: '10px',

            '@media screen and (min-width: 62em)': {
              marginBottom: 0
            }
          }}>
            <Link href={link}>{cta}</Link>
          </Box>
          <Flex>
            {Array.isArray(tags) && tags.map(tag => (
              <Box>
                <Badge variant="outline" sx={{padding: '5px 10px', marginRight: '5px'}}>{tag}</Badge>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
      {<Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: `linear-gradient(to bottom, ${overlayColorStart}, ${overlayColorEnd})`,
          zIndex: 11,
          transition: "background 0.3s cubic-bezier(0.33, 0.66, 0.66, 1)"
        }}
      />}
      {overlayColor && <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: overlayColor,
          zIndex: 10,
          transition: "background 0.3s cubic-bezier(0.33, 0.66, 0.66, 1)"
        }}
      />}
    </Box>
  );
};

Tile.propTypes = {
  /** Image */
  image: string,
  /** Title */
  title: string,
  /** Summary */
  summary: string,
  /** Avatar Image 50x50 */
  avatar: string,
  /** Tags */
  tags: array,
  /** Link for the CTA */
  link: string,
  /** CTA Label */
  cta: string,
  /** Color Overlay */
  overlayColor: string,
  /** Top-Down Gradient Overlay Start Color */
  overlayColorStart: string,
  /** Top-Down Gradient Overlay End Color */
  overlayColorEnd: string,
}

Tile.defaultProps = {

}

export default Tile;
