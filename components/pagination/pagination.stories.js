import Pagination from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Pagination', Pagination)
  .addParameters({ component: Pagination })
  .add('Default', () => <Pagination count={10}>Hello Button</Pagination>)
