/** @jsx jsx */
import Tile from './index'
import { storiesOf } from '@storybook/react';
import { Box, Flex, Grid, jsx } from 'theme-ui'
import { number } from '@storybook/addon-knobs';

storiesOf('Components/Tile', Tile)
  .add('Default', () =>
    <Tile
      avatar="https://picsum.photos/seed/picsum/50"
      cta="Read more"
      title="Lorem Ipsum"
      summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      image="https://picsum.photos/seed/picsum/640/480"
      link="https://www.lipsum.com/"
      tags={[]}
      overlayColor=""
      overlayColorStart="rgba(233, 150, 122, 0.5)"
      overlayColorEnd="rgba(139, 0, 0, 0.5)"
    />
  )
  .add('Flex Grid', () =>
    <Flex sx={{
      flexWrap: 'wrap',
      width: '100%',
      height: '100%'
    }}>
      <Box sx={{
        width: '70%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(176, 224, 230, 0.5)"
        />
      </Box>
      <Box sx={{
        width: '30%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(173, 216, 230, 0.5)"
        />
      </Box>
      <Box sx={{
        width: '33.33%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(135, 206, 235, 0.5)"
        />
      </Box>
      <Box sx={{
        width: '33.33%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(135, 206, 250, 0.5)"
        />
      </Box>
      <Box sx={{
        width: '33.33%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(0, 191, 255, 0.5)"
        />
      </Box>
      <Box sx={{
        width: '25%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(30, 144, 255, 0.5)"
        />
      </Box>
      <Box sx={{
        width: '25%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(100, 149, 237, 0.5)"
        />
      </Box>
      <Box sx={{
        width: '50%'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(123, 104, 238, 0.5)"
        />
      </Box>
    </Flex>
  )
  .add('Grid Layout', () =>
    <Grid
      columns={[2, '1fr 2fr']}
      gap={number('Gap', 2)}
      sx={{
        marginBottom: 5
      }}>
      <Box sx={{
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColorStart="rgba(255,229,168,0.5)"
          overlayColorEnd="rgba((251,174,222,0.5)"
        />
      </Box>
      <Box sx={{
        'grid-row': 'span 2'
      }}>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor="rgba(0, 0, 0, 0.3)"
          overlayColorStart="rgba(173,252,234,0.5)"
          overlayColorEnd="rgba(192,229,246, 0.5)"
        />
      </Box>
      <Box>
        <Tile
          avatar="https://picsum.photos/seed/picsum/50"
          cta="Read more"
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://picsum.photos/seed/picsum/640/480"
          link="https://www.lipsum.com/"
          tags={[]}
          overlayColor=""
          overlayColorStart="rgba(233, 150, 122, 0.5)"
          overlayColorEnd="rgba(139, 0, 0, 0.5)"
        />
      </Box>
    </Grid>
  )
