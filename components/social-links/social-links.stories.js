import SocialLinks from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Social-Links', SocialLinks)
  .addParameters({ component: SocialLinks })
  .add('Default', () => (
    <SocialLinks channels={[
      {
        name: 'twitter',
        url: "https://twitter.com"
      },
      {
        name: 'behance',
        url: "https://behance.net"
      },
      {
        name: 'dribbble',
        url: "https://dribbble.com"
      },
      {
        name: 'github',
        url: "https://github.com"
      },
      {
        name: 'linkedin',
        url: "https://linkedin.com"
      },
      {
        name: 'youtube',
        url: "https://youtube.com"
      }
    ]} />
  ))
  .add('Custom Styles', () => (
    <SocialLinks styles={{
      fontSize: '32px',
      margin: '0 10px 0 0'
    }} channels={[
      {
        name: 'twitter',
        url: "https://twitter.com"
      },
      {
        name: 'behance',
        url: "https://behance.net"
      },
      {
        name: 'dribbble',
        url: "https://dribbble.com"
      },
      {
        name: 'github',
        url: "https://github.com"
      },
      {
        name: 'linkedin',
        url: "https://linkedin.com"
      },
      {
        name: 'youtube',
        url: "https://youtube.com"
      }
    ]} />
  ))
