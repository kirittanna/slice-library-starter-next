/** @jsx jsx */
import { jsx } from 'theme-ui'
import { array, func, number } from 'prop-types'
import { Vec3 } from 'curtainsjs';
import { Curtains, Plane } from 'react-curtains';
import { useEffect, useRef, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { vertexShader, fragmentShader } from './shaders'

let Draggabilly;
if (process.browser) {
  Draggabilly = require('draggabilly')
}

function lerp(value1, value2, amount) {
	amount = amount < 0 ? 0 : amount;
	amount = amount > 1 ? 1 : amount;
  return value1 + (value2 - value1) * amount;
}

const styles = {
  canvas: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  dragger: {
    position: 'absolute',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    cursor: 'grab',
    touchAction: 'none'
  },
  planesContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  planeWrapper: {
    position: 'relative',
    height: '100vh'
  },
  plane: {
    position: 'absolute',
    left: '40px',
    top: '40px',
    width: 'calc(100% - 80px)',
    height: 'calc(100% - 80px)',
    objectFit: 'cover'
  },
  image: {
    display: 'none',
    maxWidth: '100%'
  }
}

// const images = [
//   'https://images.unsplash.com/photo-1430740537271-3448563a1a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&h=1024&q=80',
//   'https://images.unsplash.com/photo-1416359658663-73a3834895eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&h=1024&q=80',
//   'https://images.unsplash.com/photo-1451342695181-17c97b85aab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&h=1024&q=80',
//   'https://images.unsplash.com/photo-1441038718687-699f189fa401?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&h=1024&q=80',
// ]

const Slider = ({activeIndex, images, onChange}) => {

  const easing = 0.05;
  const animationValue = useRef(0);
  const dragger = useRef();
  const currentIndex = useRef(activeIndex);
  const planesDeformations = useRef(0);
  const [props, set] = useSpring(() => ({y: 0, config: config.slow, onFrame: ({y}) => {
    animationValue.current = y;
  }}))

  useEffect(() => {

    let dir = 0;
    let mv = null;

    const drag = new Draggabilly( dragger.current, {
      axis: 'y'
    });

    drag.on( 'dragMove', ( event, pointer, moveVector ) => {
      mv = moveVector;
      dir = moveVector.y < 0 ? 1 : -1;

      planesDeformations.current = mv.y / window.innerHeight * 40.0 * -1;
    })

    drag.on('dragEnd', () => {

      if ( Math.abs(mv.y) > window.innerHeight / 3) {
        currentIndex.current += dir;

        if(currentIndex.current < 0) {
          currentIndex.current = 0;
        }

        if(currentIndex.current >= images.length) {
          currentIndex.current = images.length - 1;
        }
      }

      set({ y: -(currentIndex.current * window.innerHeight) })

      onChange(currentIndex.current);

    })

  }, [])

  useEffect(() => {
    planesDeformations.current = 40 * (currentIndex.current < activeIndex ? 1 : -1);
    currentIndex.current = activeIndex
    set({ y: -(currentIndex.current * window.innerHeight) })
  }, [activeIndex])

  const onRender = (curtains) => {
    if(curtains.planes) {
      planesDeformations.current = curtains.lerp(
        planesDeformations.current,
        0,
        easing
      );

      curtains.planes.forEach((plane) => {
        plane.setRelativeTranslation(new Vec3(0, animationValue.current), 0);
        plane.uniforms.planeDeformation.value = planesDeformations.current;
      });
    }
  }

  const uniforms = {
    planeDeformation: {
      name: "uPlaneDeformation",
      type: "1f",
      value: 0
    }
  };

  const drawCheckMargins = {
    top: 100,
    right: 0,
    bottom: 100,
    left: 0
  };

  return (
    <div style={styles.planesContainer}>
      <Curtains
        style={styles.canvas}
        pixelRatio={Math.min(1.5, process.browser ? window.devicePixelRatio : 2)}
        antialias={false}
        onRender={onRender}
      >
          <animated.div style={props}>
            {images.map((image, i) => (
              <div key={i} style={styles.planeWrapper}>
                <Plane
                  style={styles.plane}

                  vertexShader={vertexShader}
                  fragmentShader={fragmentShader}
                  shareProgram={true}
                  widthSegments={10}
                  heightSegments={10}
                  drawCheckMargins={drawCheckMargins}
                  uniforms={uniforms}
                >
                  <img
                    data-sampler="planeTexture"
                    className="texture"
                    src={image}
                    crossOrigin="anonymous"
                    style={styles.image}
                  />
                </Plane>
              </div>
            ))}
          </animated.div>
      </Curtains>
      <div ref={dragger} style={styles.dragger}></div>
    </div>
  )
}

Slider.propTypes = {
  images: array,
  activeIndex: number,
  onChange: func
}

export default Slider;
