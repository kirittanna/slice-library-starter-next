/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { number } from 'prop-types'

const styles = {
  position: 'relative',
  mx: '0',
  mt: '0',
  mb: '10px'
}

const Heading = ({ children, level }) => {
  switch(level) {
    case 1:
      return <Styled.h1 sx={styles}>{children}</Styled.h1>;
    case 2:
      return <Styled.h2 sx={styles}>{children}</Styled.h2>;
    case 3:
      return <Styled.h3 sx={styles}>{children}</Styled.h3>;
    case 4:
      return <Styled.h4 sx={styles}>{children}</Styled.h4>;
    case 5:
      return <Styled.h5 sx={styles}>{children}</Styled.h5>;
    case 6:
      return <Styled.h6 sx={styles}>{children}</Styled.h6>;
  }
}

Heading.propTypes = {
  /** Heading level
   * h1
   * h2
   * h3
   * h4
   * h5
   * h6
   */
  level: number.isRequired
}

export default Heading;
