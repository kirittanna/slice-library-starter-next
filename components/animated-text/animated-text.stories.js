import AnimatedText from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Animated-Text', AnimatedText)
  .add('Default', () => (
    <AnimatedText>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AnimatedText>
  ))
