/** @jsx jsx */
import { Box, Flex, Image, jsx, Text } from 'theme-ui'
import { bool, oneOf, string } from 'prop-types'
import Heading from '../heading'
import Eyebrow from '../eyebrow'
import Link from '../link'

const ContentSection = ({
  bgColor,
  flipped,
  category,
  title,
  summary,
  image,
  cta,
  url,
  ratio
}) => {

  const getSizes = () => {
    switch(ratio) {
      case 'half':
        return {
          image: '50%',
          content: '50%'
        }
      case 'one-third':
        return {
          image: '33.33%',
          content: '66.66%'
        }
      case 'quarter':
        return {
          image: '25%',
          content: '75%'
        }
    }
  }

  const sizes = getSizes();

  return (
    <Flex sx={{
      width: '100%',
      flexDirection: flipped ? 'column-reverse' : 'column',
      justifyContent: 'center',

      '@media screen and (min-width: 48em)': {
        flexDirection: flipped ? 'row-reverse' : 'row'
      }
    }}>
      <Box
        sx={{
          position: 'relative',
          flex: '1 0 100%',
          width: '100%',
          overflow: 'hidden',

          '@media screen and (min-width: 48em)': {
            position: 'relative',
            flex: `1 1 ${sizes.image}`,
            width: sizes.image,
          }
        }}>
        <Image
          draggable={false}
          src={image}
          sx={{
            minHeight: '100%',
            minWidth: '100%',
            objectFit: 'cover',
            userSelect: 'none'
          }} />
      </Box>
      <Box sx={{
        flex: '1 0 100%',
        backgroundColor: bgColor,
        padding: '20px',

        '@media screen and (min-width: 40em)': {
          flex: `1 0 ${sizes.content}`,
        }
      }}>
        <Eyebrow>{category}</Eyebrow>
        <Heading level={3}>{title}</Heading>
        <Text sx={{
          mb: '10px'
        }}>{summary}</Text>
        <Link href={url}>{cta}</Link>
      </Box>
    </Flex>
  )
}

ContentSection.propTypes = {
  flipped: bool,
  bgColor: string,
  category: string,
  title: string,
  summary: string,
  image: string,
  url: string,
  cta: string,
  ratio: oneOf([
    'half',
    'one-third',
    'quarter'
  ])
}

ContentSection.defaultProps = {
  flipped: false,
  ratio: 'half'
}

export default ContentSection;
