import Pagination from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Pagination', Pagination)
  .add('Default', () => <Pagination count={10}>Hello Button</Pagination>)
