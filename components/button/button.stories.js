import Button from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Button', Button)
  .addParameters({ component: Button })
  .add('Default', () => <Button>Hello Button</Button>)
