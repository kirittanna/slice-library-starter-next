import Eyebrow from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Eyebrow', Eyebrow)
  .addParameters({ component: Eyebrow })
  .add('Default', () => (
    <Eyebrow>category</Eyebrow>
  ))
