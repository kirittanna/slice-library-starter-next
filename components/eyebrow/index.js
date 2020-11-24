/** @jsx jsx */
import { jsx, Text } from 'theme-ui'

const Eyebrow = ({children}) => (
  <span sx={{display:'inline-block', mb: '5px'}}>
    <Text sx={{
      variant: 'text.eyebrow'
    }}>
      {children}
      <span sx={{
        position: 'relative',
        display: 'block',
        width: '15%',
        height: '2px',
        mt: '5px',
        backgroundColor: 'accent'
      }}></span>
    </Text>
  </span>
)

export default Eyebrow;
