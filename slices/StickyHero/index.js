/** @jsx jsx */
import { jsx } from 'theme-ui'
import { array, string, shape } from 'prop-types';
import { Box, Text } from 'theme-ui'
import { RichText } from 'prismic-reactjs';
import { useInView } from 'react-intersection-observer';

import Heading from '../../components/heading'
import linkResolver from '../../library/link-resolver'
import * as types from '../../library/types'

const StickyHero = ({ slice: {
  primary
} }) => {
  const [ref, inView, entry] = useInView({
    threshold: [0, 1],
    trackVisibility: true,
    delay: 100
  });

  const isSticky = entry && entry.boundingClientRect.top <= 0;

  const effects = {
    none: {},
    scale: {
      transition: 'transform 250ms ease-out',
      transform: `scale(${isSticky ? '0.9' : '1.0'})`,
    },
    overlay: {
      "::after": {
        content: '""',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        opacity: isSticky ? 0.5 : 0,
        transition: 'opacity 250ms ease-out'
      }
    }
  }

  return (
    <section css={{
      width: '100%',
    }}>
      <Box
        ref={ref}
        sx={{
          position: 'sticky',
          top: '0',
          zIndex: 1,
          height: '100vh',
          background: `url(${primary.image.url}) no-repeat center center`,
          backgroundSize: 'cover',
          ...effects[primary.effect]
        }}
        aria-hidden="true"
      >
      </Box>
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Heading level={2}>{primary.heading}</Heading>
        <Text variant={primary.textVariant || 'default'}>
          <RichText render={primary.text[0].text} linkResolver={linkResolver} />
        </Text>
      </Box>
    </section>
  );
}

StickyHero.propTypes = {
  /** Slice Data */
  slice: shape({
    /** Non-repeatable Zone Data */
    primary: shape({
      /**
       * Effect when image is within the viepwort
       * Options - overlay | scale | none
       * Defaults to scale
       */
      effect: string.isRequired,
      /** Image */
      image: types.image,
      /** Text content */
      text: array.isRequired,
      /** Text variant from theme definition */
      textVariant: string
    }).isRequired,
  }).isRequired,
};

export default StickyHero;
