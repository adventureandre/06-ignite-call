import { globalCss } from '@advfw-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
  },
})
