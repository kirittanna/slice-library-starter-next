/** @jsx jsx */
import { useEffect, useState } from "react";
import { Box, jsx } from "theme-ui";
import { useSpring, animated, config } from "react-spring";
import styled from '@emotion/styled'
import { func, number } from 'prop-types';

import { useKeyDownOnly } from "../../hooks/events";

const ActivePage = styled(animated.div)(
  ({theme}) => ({
    position: 'absolute',
    left: 0,
    width: '20px',
    borderRadius: '20px',
    backgroundColor: theme.colors.accent
  })
)

const Pager = ({ count, currentPage, onChange }) => {
  const defaultConfig = {
    mass: 3,
    tension: 120,
    friction: 16,
    clamp: true
  };

  const front = {
    ...defaultConfig,
    velocity: 5
  };
  const back = { ...defaultConfig };

  const [activePage, setPage] = useState(currentPage);
  const [isForward, setIsForward] = useState(true);
  const [bottom, setBottom] = useSpring(() => ({
    bottom: `0px`,
  }));
  const [top, setTop] = useSpring(() => ({
    top: `30px`,
  }));

  const pages = Array.from(Array(count).keys()).map(p => `page-${p}`);

  const pageUp = () => {
    jumpToPage(Math.min(activePage + 1, count - 1));
  };

  const pageDown = () => {
    jumpToPage(Math.max(prevPage - 1, 0));
  };

  const jumpToPage = index => {
    setIsForward(index > activePage);
    setPage(index);
    onChange(index)
  };

  useEffect(() => {
    jumpToPage(currentPage)
    setBottom({
      bottom: `${count * 30 - 20 - currentPage * 30}px`,
      config: isForward ? front : back
    });
    setTop({
      top: `${currentPage * 30}px`,
      config: isForward ? back : front
    });
  }, [currentPage])

  return (
    <Box sx={{
      position: 'relative',
      pointerEvents: 'auto'
    }}>
      {pages.map((_, index) => (
        <Box
          sx={{
            display: 'block',
            marginBottom: '10px',
            width: '20px',
            height: '20px',
            borderRadius: '100%',
            backgroundColor: 'text',
            opacity: 0.4,
            cursor: 'pointer'
          }}
          key={index}
          active={index === activePage}
          onClick={() => jumpToPage(index)}
        />
      ))}
      <ActivePage
        style={{
          ...top,
          ...bottom
        }}
      />
    </Box>
  );
}

Pager.propTypes = {
  /** Page count */
  count: number.isRequired,
  /** Current page */
  currentPage: number.isRequired,
  /** Callback for user-interaction */
  onChange: func
}

export default Pager;
