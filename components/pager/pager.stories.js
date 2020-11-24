import Pager from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Pager', Pager)
  .addParameters({ component: Pager })
  .add('Default', () => (
    <Pager count={10} currentPage={0} onChange={() => {}}  />
  ))
