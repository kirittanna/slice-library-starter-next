/** @jsx jsx */
import { Box, jsx } from 'theme-ui'
import { array } from 'prop-types'

const Masonry = ({images, spacing}) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateRows: `repeat(${Math.ceil(images.length)}, 25vh)`,
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: `${spacing}px`
    }}>
      {images.map((image, index) => (
        <Box key={index} sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          overflow: 'hidden',
          ':nth-child(1)': {
            gridRow: '1 / 3'
          },
          ':nth-child(2)': {
            gridColumn: '2 / 4',
            gridRow: '1 / 3'
          },
          ':nth-child(3)': {
            gridColumn: '3 / 4',
            gridRow: '3 / 6'
          },
          ':nth-child(4)': {
            gridColumn: '2 / 3',
            gridRow: '3 / 4'
          },
          ':nth-child(5)': {
            gridColumn: '1 / 3',
            gridRow: '4 / 6'
          }
        }}>
        </Box>
      ))}
    </Box>
)

Masonry.propTypes = {
  images: array.isRequired,
  spacing: number
}

Masonry.defaultProps = {
  spacing: 0
}

export default Masonry
