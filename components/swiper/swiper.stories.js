import { storiesOf } from '@storybook/react';
import { Box } from 'theme-ui';
import Swiper from './index'
import ContentSection from '../content-section'

storiesOf('Components/Swiper', Swiper)
  .add('Default', () => (
    <Box sx={{
      height: '100vh',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      <Swiper items={Array.from(Array(4).keys())} itemWidth={'full'} visible={1}>
        {(item =>
          <ContentSection
            key={item}
            flipped={item % 2 === 0}
            bgColor={item % 2 === 0 ? "olive" : 'goldenrod'}
            ratio="half"
            title={item}
            category="tutorials"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            url="http://lipsum.com"
            image="https://picsum.photos/seed/picsum/500"
            cta="Read more"
          />
        )}
      </Swiper>
    </Box>
  )
)
