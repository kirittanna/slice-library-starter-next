/** @jsx jsx */
import { useState } from 'react';
import { arrayOf, object, shape } from 'prop-types';
import { Flex, jsx } from 'theme-ui';
import CurtainsSlider from '../../components/curtains-slider'
import Heading from '../../components/heading'
import Button from '../../components/button'
import Pager from '../../components/pager'

export const ProjectShowcaseSlice = ({ slice: {
  items
} }) => {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section>
      <CurtainsSlider
        images={items.map(item => item.image.url)}
        activeIndex={activeIndex}
        onChange={(index) => setActiveIndex(index)}
      />
      <div sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',

        "&::after": {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }
      }}>
        <Flex
          sx={{
            position: 'relative',
            padding: '10px 20px',
            alignItems: 'flex-start',
            zIndex: 10,
            flexDirection: 'column',
            margin: '0 auto',
            maxWidth: '50%',

            '@media screen and (min-width: 62em)': {
              alignItems: 'center',
              maxWidth: '100%',
              flexDirection: 'row',
            }
          }}>
          <Heading level={1}>{items[activeIndex].title}</Heading>
          <span sx={{
            width: '100px',
            height: '2px',
            backgroundColor: 'primary',
            mx: '20px',
            display: 'none',

            '@media screen and (min-width: 62em)': {
              display: 'inline-block'
            }
          }} />
          <Button
            styles={{
              flex: '1',
              pointerEvents: 'auto'
            }}>
            View Case-Study
          </Button>
        </Flex>
      </div>
      <Flex sx={{
        position: 'relative',
        right: 20,
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-end',
        pointerEvents: 'none'
      }}>
        <Pager
          count={items.length}
          currentPage={activeIndex}
          onChange={(index) => setActiveIndex(index)} />
      </Flex>
    </section>
  );
}

ProjectShowcaseSlice.propTypes = {
  /** Slice Data */
  slice: shape({
    /** Repeatable Zone Data */
    items: arrayOf(shape({
      image: object
    })),
    /** Non-repeatable Zone Data */
    primary: shape({

    }).isRequired,
  }).isRequired,
};

export default ProjectShowcaseSlice;
