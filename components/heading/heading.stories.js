import Heading from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Heading', Heading)
  .add('Levels', () => (
    <>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </>
  ))
