/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import { number } from 'prop-types';

const Preset = ({children}) => (
  <Flex sx={{
    flexWrap: 'wrap',
    width: '100%',
    height: '100%'
  }}>
    <Box sx={{
      width: '70%'
    }}>
      {children[0]}
    </Box>
    <Box sx={{
      width: '30%'
    }}>
      {children[1]}
    </Box>
    <Box sx={{
      width: '50%'
    }}>
      {children[2]}
    </Box>
    <Box sx={{
      width: '50%'
    }}>
      {children[3]}
    </Box>
    <Box sx={{
      width: '70%'
    }}>
      {children[4]}
    </Box>
    <Box sx={{
      width: '30%'
    }}>
      {children[5]}
    </Box>
  </Flex>
)

Preset.propTypes = {
  gap: number
}

export default Preset
