import Eyebrow from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Eyebrow', Eyebrow)
  .add('Default', () => (
    <Eyebrow>category</Eyebrow>
  ))
