/** @jsx jsx */
import { array, shape } from 'prop-types';
import { Box, jsx, Styled } from 'theme-ui'
import { RichText } from 'prismic-reactjs';
import Heading from '../../components/heading'
import Swiper from '../../components/swiper'
import ContentSection from '../../components/content-section'

const ContentSliderSlice = ({ slice: {
  items,
  primary
} }) => (
  <section sx={{
    position: 'relative',
    height: '100vh',
  }}>
    <Box sx={{
      textAlign: 'center',
      marginBottom: '20px'
    }}>
      {primary.title && <Heading level={2}>{primary.title[0].text}</Heading>}
      {primary.description && <RichText render={primary.description} />}
    </Box>
    <Box sx={{
      height: '100%',
      margin: '0 auto'
    }}>
      <Swiper items={items} itemWidth={'full'} visible={1}>
        {(item, index) => (
          <ContentSection
            key={index}
            flipped={item.flipped}
            bgColor={item.bgColor}
            ratio={primary.ratio}
            title={item.title}
            category={item.section}
            summary={item.summary[0].text}
            url={item.link.url}
            image={item.image.url}
            cta={item.cta}
          />
        )}
      </Swiper>
    </Box>
  </section>
);

ContentSliderSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContentSliderSlice;
