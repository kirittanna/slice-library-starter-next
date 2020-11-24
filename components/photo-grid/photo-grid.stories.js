import ImageGrid from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Image-Grid', ImageGrid)
  .addParameters({ component: ImageGrid })
  .add('Default', () => (
    <ImageGrid
      images={[
        'https://picsum.photos/200/300',
        'https://picsum.photos/400',
        'https://picsum.photos/240/320',
        'https://picsum.photos/640/480',
        'https://picsum.photos/500',
        'https://picsum.photos/720/360',
        'https://picsum.photos/480/320',
        'https://picsum.photos/600/400',
        'https://picsum.photos/600/300',
        'https://picsum.photos/800/400',
      ]}
    />
  ))
  .add('With Spacing', () => (
    <ImageGrid
      spacing={10}
      images={[
        'https://picsum.photos/200/300',
        'https://picsum.photos/400',
        'https://picsum.photos/240/320',
        'https://picsum.photos/640/480',
        'https://picsum.photos/500',
        'https://picsum.photos/720/360',
        'https://picsum.photos/480/320',
        'https://picsum.photos/600/400',
        'https://picsum.photos/600/300',
        'https://picsum.photos/800/400',
      ]}
    />
  ))
