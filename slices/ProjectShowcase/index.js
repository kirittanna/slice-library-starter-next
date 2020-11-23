/** @jsx jsx */
import { useState } from 'react';
import { array, shape } from 'prop-types';
import { Box, Flex, jsx } from 'theme-ui';
import CurtainsSlider from '../../components/curtains-slider'
import Heading from '../../components/heading'
import Button from '../../components/button'
import Pager from '../../components/pager'

const ProjectShowcaseSlice = ({ slice: {
  items,
  primary
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
            padding: '20px 40px',
            alignItems: 'center',
            zIndex: 10,
          }}>
          <Heading level={1}>{items[activeIndex].title}</Heading>
          <span sx={{
            width: '100px',
            height: '2px',
            backgroundColor: 'primary',
            mx: '20px'
          }} />
          <Button
            variant="secondary"
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
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectShowcaseSlice;
