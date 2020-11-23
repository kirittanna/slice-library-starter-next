import { number, object, shape, string } from 'prop-types';

export const image = shape({
  alt: string,
  copyright: object,
  dimensions: shape({
    width: number,
    height: number
  }),
  url: string.isRequired
})
