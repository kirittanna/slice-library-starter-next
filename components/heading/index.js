/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const styles = {
  position: 'relative',
  mx: '0',
  mt: '0',
  mb: '10px',
  // paddingLeft: '30px',

  // '::before': {
  //   content: '""',
  //   position: 'absolute',
  //   top: '50%',
  //   left: 0,
  //   width: '25px',
  //   height: '2px',
  //   backgroundColor: 'text',
  // }
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

export default Heading;
