import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
  .add(variation.name, () => <Component slice={variation} />)
});


export default {
  title: 'Project-Showcase Slice',
  componentSubtitle: 'Showcase your projects',
  component: Component,
};
