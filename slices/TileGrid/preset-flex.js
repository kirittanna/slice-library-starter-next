/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import { number } from 'prop-types';

const Preset = ({children}) => (
  <Flex sx={{
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',

    '@media screen and (min-width: 48em)': {
      flexDirection: 'row',
    }
  }}>
    <Box sx={{
      width: '100%',
      marginBottom: '10px',

      '@media screen and (min-width: 48em)': {
        width: '69%',
        marginRight: '1%'
      }
    }}>
      {children[0]}
    </Box>
    <Box sx={{
      width: '100%',
      marginBottom: '10px',

      '@media screen and (min-width: 48em)': {
        width: '30%'
      }
    }}>
      {children[1]}
    </Box>
    <Box sx={{
      width: '100%',
      marginBottom: '10px',

      '@media screen and (min-width: 48em)': {
        width: '49%',
        marginRight: '1%'
      }
    }}>
      {children[2]}
    </Box>
    <Box sx={{
      width: '100%',
      marginBottom: '10px',

      '@media screen and (min-width: 48em)': {
        width: '50%'
      }
    }}>
      {children[3]}
    </Box>
    <Box sx={{
      width: '100%',
      marginBottom: '10px',

      '@media screen and (min-width: 48em)': {
        width: '29%',
        marginRight: '1%'
      }
    }}>
      {children[4]}
    </Box>
    <Box sx={{
      width: '100%',
      marginBottom: '10px',

      '@media screen and (min-width: 48em)': {
        width: '70%'
      }
    }}>
      {children[5]}
    </Box>
  </Flex>
)

Preset.propTypes = {
  gap: number
}

export default Preset
