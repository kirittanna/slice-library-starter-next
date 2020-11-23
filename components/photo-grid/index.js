/** @jsx jsx */
import { Box, jsx, Image } from 'theme-ui'
import { array, number } from 'prop-types'
import imagesLoaded from 'imagesloaded';
import { useEffect, useRef, useState } from 'react'

const PhotoGrid = ({images, spacing}) => {
  const [loadComplete, setLoadComplete] = useState(false);
  const grid = useRef();

  useEffect(() => {
    imagesLoaded(grid.current, {}, () => {
      setLoadComplete(true)
    })
  }, [])

  return (
    <Box sx={{
      opacity: loadComplete ? 1 : 0,
      transition: 'opacity 300ms ease-out',
    }}>
      <Box
        ref={grid}
        sx={{
          lineHeight: 0,
          columnCount: 1,
          columnGap: `${spacing}px`,

          '@media (min-width: 36em)': {
            columnCount: 2
          },

          '@media (min-width: 48em)': {
            columnCount: 3
          },

          '@media (min-width: 62em)': {
            columnCount: 4
          },

          '@media (min-width: 75em)': {
            columnCount: 5
          },
        }}>
        {images.map(image =>
          <Image
            src={image}
            sx={{
              width: '100% !important',
              height: 'auto !important',
              marginBottom: `${spacing}px`
            }}
          />
        )}
      </Box>
    </Box>
  )
}

PhotoGrid.propTypes = {
  images: array.isRequired,
  spacing: number
}

PhotoGrid.defaultProps = {
  spacing: 0
}

export default PhotoGrid;
