import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
  .addParameters({ component: Component })
  .add(variation.name, () =>
  <>
    <LinkTo kind="Components/Content-Section" story="Default">See Content-Section Component</LinkTo>
    <Component slice={variation} />
  </>);
});
