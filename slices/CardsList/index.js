/** @jsx jsx */
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Box, jsx } from 'theme-ui';
import InfiniteSlider from '../../components/infinite-slider'
import Card from '../../components/card'
import Heading from '../../components/heading'

const CardsListSlice = ({ slice: {
  items,
  primary
} }) => {

  return (
    <section sx={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Box sx={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        {primary.title && <Heading level={2}>{primary.title[0].text}</Heading>}
        {primary.description && <RichText render={primary.description} />}
      </Box>
      <Box sx={{
        width: '100%',
        height: '100%',
      }}>
        <InfiniteSlider items={items} width={primary.cardWidth}>
          {(item, index) => (
            <Card
              key={index}
              bgColor={item.bgColor}
              title={item.title}
              image={item.image.url}
              summary={item.summary[0].text}
              primaryLink={item.primaryLink.url}
              primaryCta={item.primaryCta}
              secondaryLink={item.secondaryLink.url}
              secondaryCta={item.secondaryCta}
              variant={item.variant}
            />
          )}
        </InfiniteSlider>
      </Box>
    </section>
  );
}

CardsListSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardsListSlice;
