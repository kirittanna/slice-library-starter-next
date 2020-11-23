import Button from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Button', Button)
  .add('Default', () => <Button>Hello Button</Button>)
  .add('Secondary', () => <Button variant="secondary">Hello Button</Button>)
