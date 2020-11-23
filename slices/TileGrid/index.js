/** @jsx jsx */
import { useMemo } from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { jsx } from 'theme-ui';
import Preset3 from './preset3-1'
import Preset4 from './preset4-1'
import Preset5 from './preset5-1'
import FlexPreset from './preset-flex'
import Tile from '../../components/tile'
import Heading from '../../components/heading'

const TileGridSlice = ({ slice: {
  items,
  primary
} }) => {

  const Wrapper = useMemo(() => {
    switch(items.length) {
      case 3:
        return Preset3
      case 4:
        return Preset4
      case 5:
        return Preset5
      default:
        return FlexPreset
    }
  }, [items])

  return (
    <section>
      {primary.title && <Heading level={2}>{primary.title[0].text}</Heading>}
      {primary.description && <RichText render={primary.description} />}
      <Wrapper gap={primary.gap}>
        {items.map((tile, index) => (
          <Tile
            key={index}
            avatar={tile.avatar.url}
            cta={tile.cta}
            title={tile.title}
            summary={tile.summary[0].text}
            image={tile.image.url}
            link={tile.link.url}
            tags={tile.tags.split(',')}
            overlayColor={tile.overlayColor}
            overlayColorStart={tile.overlayColorStart}
            overlayColorEnd={tile.overlayColorEnd}
          />
        ))}
      </Wrapper>
    </section>
  );
}

TileGridSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TileGridSlice;
