import ContentSection from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Content-Section', ContentSection)
  .addParameters({ component: ContentSection })
  .add('Default', () => (
    <ContentSection
      bgColor="red"
      title="Lorem Ipsum"
      category="Dummy Text"
      summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      url="http://lipsum.com"
      image="https://picsum.photos/seed/picsum/500"
      cta="Read more"
    />
  ))
  .add('Flipped', () => (
    <ContentSection
      bgColor="olive"
      flipped
      title="Lorem Ipsum"
      category="Dummy Text"
      summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      url="http://lipsum.com"
      image="https://picsum.photos/seed/picsum/500"
      cta="Read more"
    />
  ))
  .add('One-Third', () => (
    <ContentSection
      bgColor="olive"
      ratio="one-third"
      title="Lorem Ipsum"
      category="Dummy Text"
      summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      url="http://lipsum.com"
      image="https://picsum.photos/seed/picsum/500"
      cta="Read more"
    />
  ))
  .add('Quarter', () => (
    <ContentSection
      bgColor="olive"
      ratio="quarter"
      title="Lorem Ipsum"
      category="Dummy Text"
      summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      url="http://lipsum.com"
      image="https://picsum.photos/seed/picsum/500"
      cta="Read more"
    />
  ))
