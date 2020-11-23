import List from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/List', List)
  .add('Default', () => (
    <List>category</List>
  ))
