/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import { css } from '@emotion/core'
import { useEffect } from 'react';
import Splitting from "splitting";

const AnimatedText = ({children}) => {

  useEffect(() => {
    Splitting();
  }, [])

  return (
    <div css={
      css`
        .splitting .char {
          animation: slide-in .6s cubic-bezier(.5, 0, .5, 1) both;
          animation-delay: calc(3ms * var(--char-index) + 1000ms );
        }

        @keyframes slide-in {
          from {
            transform: translateY(1.5em);
            opacity: 0;
          }
        }
      `
    }>
      <Text
        sx={{
          variant: 'text.animated'
        }}
        data-splitting=""
      >
        {children}
      </Text>
    </div>
  )
}

export default AnimatedText;
