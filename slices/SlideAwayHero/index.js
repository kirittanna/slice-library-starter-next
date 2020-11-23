/** @jsx jsx */
import { Box, Flex, jsx, Text } from 'theme-ui'
import { useEffect, useRef } from "react";
import { array, shape } from "prop-types";
import { RichText } from 'prismic-reactjs';

import Link from '../../components/link';
import Heading from '../../components/heading';
import linkResolver from '../../library/link-resolver'

const SlideAwayHero = ({ children, slice: {
  items,
  primary,
} }) => {

  const cover = useRef();

  useEffect(() => {
    cover.current.style.bottom = `${(window.innerHeight - cover.current.offsetHeight)}px`;
  }, [])

  return (
    <section>
      <Flex sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${primary.image.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        zIndex: 2,
        alignContent: 'center',
        justifyContent: 'center',

        "&::after": {
          content: '""',
          position: 'absolute',
          zIndex: 1,
          opacity: 0.5,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: primary.bgcolor,
        }
      }}>
        <Flex sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 5,
        }}>
          <Heading level={2}>{primary.heading}</Heading>
          <Text variant={primary.textVariant || 'default'}>
            <RichText render={primary.text[0].text} linkResolver={linkResolver} />
          </Text>
          <Link href={primary.ctaLink} styles={{
            flexShrink: 1
          }}>{primary.cta}</Link>
        </Flex>
      </Flex>
      <div
        ref={cover}
        sx={{
          position: 'sticky',
          minHeight: '100vh',
          padding: '10vw'
        }}>
        {children}
      </div>
    </section>
  );
}

SlideAwayHero.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired
    }).isRequired
  }).isRequired
};

export default SlideAwayHero;
