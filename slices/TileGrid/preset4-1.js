/** @jsx jsx */
import { Box, Flex, Grid, jsx } from 'theme-ui';
import { number } from 'prop-types';

const Preset = ({children, gap}) => (
  <Grid
    columns={[1, 3]}
    gap={gap}
    sx={{
      marginBottom: 5
    }}>
    <Box sx={{
    }}>
      {children[0]}
    </Box>
    <Box sx={{
      '@media screen and (min-width: 48em)': {
        'grid-column': 'span 2'
      }
    }}>
      {children[1]}
    </Box>
    <Box sx={{
      '@media screen and (min-width: 48em)': {
        'grid-column': 'span 2'
      }
    }}>
      {children[2]}
    </Box>
    <Box>
      {children[3]}
    </Box>
  </Grid>
)

Preset.propTypes = {
  gap: number
}

export default Preset
