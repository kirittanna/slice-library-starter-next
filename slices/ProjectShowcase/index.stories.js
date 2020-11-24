import Component, { ProjectShowcaseSlice } from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
  .addParameters({ component: ProjectShowcaseSlice })
  .add(variation.name, () => <Component slice={variation} />)
});
