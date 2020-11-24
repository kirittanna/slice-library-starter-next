/** @jsx jsx */
import { Box, Card, Flex, Image, jsx, Text } from 'theme-ui'
import { oneOf, string } from 'prop-types'
import Heading from '../heading';
import Link from '../link';

const ThemeCard = ({
  bgColor,
  title,
  image,
  summary,
  primaryLink,
  primaryCta,
  secondaryLink,
  secondaryCta,
  variant
}) => {

  const bgImage = variant === 'bg-image'
  const textOnly = variant === 'text-only'

  return (
    <Card sx={{
      position: 'relative',
      height: '100%',
      backgroundColor: bgColor,
      flex: '1 0 auto',
      overflow: 'hidden',

      ... (bgImage && {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        "::before": {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `rgba(0, 0, 0, 0.2)`,
        }
      })
    }}>
      <Flex sx={{
        position: 'relative',
        flexDirection: 'column',
        height: '100%',
        zIndex: 1,
      }}>
        <header>

        </header>
        {!textOnly && !bgImage && <Box
          sx={{
            mb: '10px'
          }}>
          <Image
            draggable={false}
            src={image}
            sx={{
              width: '100%',
              userSelect: 'none'
            }}
          />
        </Box>}
        <Box mx="20px" mt={(textOnly || bgImage) && "20px"}>
          <Heading level={3}>{title}</Heading>
        </Box>
        <Text
          sx={{
            mb: '10px',
            mx: '20px',
          }}>{summary}</Text>
        <footer sx={{
          display: 'flex',
          marginTop: 'auto',
          mx: '20px',
          marginBottom: '20px'
        }}>
          {!!primaryLink && <Box mr={1}><Link href={primaryLink}>{primaryCta}</Link></Box>}
          {!!secondaryLink && <Box mr={1}><Link href={secondaryLink}>{secondaryCta}</Link></Box>}
        </footer>
      </Flex>
    </Card>
  )
}

ThemeCard.propTypes = {
  /** Background Color */
  bgColor: string,
  /** Title */
  title: string,
  /** Image */
  image: string,
  /** Summary */
  summary: string,
  /** Primary CTA link */
  primaryLink: string,
  /** Primary CTA label */
  primaryCta: string,
  /** Secondary CTA link */
  secondaryLink: string,
  /** Secondary CTA label */
  secondaryCta: string,
  /** Variant
   * default
   * text-only
   * bg-image
   */
  variant: oneOf([
    'default',
    'text-only',
    'bg-image'
  ])
}

export default ThemeCard;
