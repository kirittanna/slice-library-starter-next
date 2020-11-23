/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { IconButton, jsx } from "theme-ui";
import { bool, func, number } from "prop-types";
import { a, useSpring } from "react-spring";
import { Icons } from "../../assets/icons";

const styles = {
  dot: {
    borderRadius: "99px",
    background: "#fff",
    width: "10px",
    height: "10px",
    margin: ".3rem",
    color: "#000"
  },
  pagination: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  pageContainer: {
    display: "flex",
    alignItems: "center"
  }
};

const Pagination = ({ currentPage, count, onChange, showNav }) => {
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage)
  }, [currentPage])

  return (
    <div style={styles.pagination}>
      <div style={styles.pageContainer}>
        {showNav && <IconButton onClick={() => {
          setActivePage(p => (p - 1 < 0 ? count - 1 : p - 1) % count)
          onChange(activePage)
        }}>{React.createElement(Icons.SmallArrowLeft)}</IconButton>}
        {Array.from(Array(count).keys()).map(p =>
          <Dot key={p} active={activePage === p} />
        )}
        {showNav && <IconButton  onClick={() => {
          setActivePage(p => (p + 1) % count)
          onChange(activePage)
        }}>{React.createElement(Icons.SmallArrowRight)}</IconButton>}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  count: number.isRequired,
  currentPage: number.isRequired,
  onChange: func,
  showNav: bool
};

const Dot = ({ active }) => {
  const { transform, opacity } = useSpring({
    opacity: active ? 1 : 0.8,
    transform: active ? `scale(1.5)` : `scale(1)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return <a.div style={{ opacity, transform, ...styles.dot }} />;
};

Dot.propTypes = {
  active: bool.isRequired
};

export default Pagination;
