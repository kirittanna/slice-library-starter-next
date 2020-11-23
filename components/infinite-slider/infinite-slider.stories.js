import { storiesOf } from '@storybook/react';
import { Box } from 'theme-ui';
import InfiniteSlider from './index'
import Card from '../card'

storiesOf('Components/Infinite-Slider', InfiniteSlider)
  .add('Default', () => (
    <Box sx={{
      width: '100%',
      height: '100vh',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      <InfiniteSlider items={Array.from(Array(10).keys())} width={400} visible={3}>
        {(item =>
          <Card
            key={item}
            title="Lorem Ipsum"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            category=""
            image="https://picsum.photos/600/800?grayscale"
            variant="bg-image"
          />
        )}
      </InfiniteSlider>
    </Box>
  )
)
