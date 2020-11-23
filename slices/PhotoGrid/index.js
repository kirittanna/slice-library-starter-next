/** @jsx jsx */
import { Box, jsx } from 'theme-ui'
import { array, arrayOf, number, object, shape, string } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import PhotoGrid from '../../components/photo-grid'
import Heading from '../../components/heading'

const PhotoGridSlice = ({ slice: {
  items,
  primary
} }) => (
  <section>
    <Box sx={{
      textAlign: 'center',
      marginBottom: '20px'
    }}>
      {primary.title && <Heading level={2}>{primary.title[0].text}</Heading>}
      {primary.description && <RichText render={primary.description} />}
    </Box>
    <Box sx={{
      position: 'relative',
      margin: '0 auto',
      maxWidth: '992px',
      width: '100%'
    }}>
      <PhotoGrid
        spacing={10}
        images={items.map(item => item.image.url)}
      />
    </Box>
  </section>
);

PhotoGridSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      description: array.isRequired
    }).isRequired,
    items: arrayOf(
      shape({
        caption: string.isRequired,
        date: string.isRequired,
        image: shape({
          alt: string,
          copyright: object,
          dimensions: shape({
            width: number,
            height: number
          }),
          url: string.isRequired
        }).isRequired
      })
    ).isRequired,
  }).isRequired,
};

export default PhotoGridSlice;
