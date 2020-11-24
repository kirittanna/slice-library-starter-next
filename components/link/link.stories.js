import Link, { CTALink } from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Components/Link', Link)
  .addParameters({ component: Link })
  .add('Default', () => <Link variant="short">Hello Button</Link>)
  .add('Multiline', () =>
    <div style={{width: '200px'}}>
      <Link variant="multiline">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Link>
    </div>
  )
