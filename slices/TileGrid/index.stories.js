import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';

import Tile from '../../components/tile'
import Preset3 from './preset3-1'
import Preset4 from './preset4-1'
import Preset5 from './preset5-1'
import FlexPreset from './preset-flex'

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => <Component slice={variation} />);
});

const SampleTile = () => (
  <Tile
    avatar="https://picsum.photos/seed/picsum/50"
    cta="Read more"
    title="Lorem Ipsum"
    summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    image="https://picsum.photos/seed/picsum/640/480"
    link="https://www.lipsum.com/"
    tags={[]}
    overlayColor="rgba(0, 0, 0, 0.3)"
    overlayColorStart="rgba(173,252,234,0.5)"
    overlayColorEnd="rgba(192,229,246, 0.5)"
  />
)

storiesOf(model.name, Preset3)
  .add('Preset 3', () => (
    <Preset3>
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </Preset3>
  ))
  .add('Preset 4', () => (
    <Preset4>
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </Preset4>
  ))
  .add('Preset 5', () => (
    <Preset5>
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </Preset5>
  ))
  .add('Flex Preset', () => (
    <FlexPreset>
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </FlexPreset>
  ))
