import * as Checkbox from '@radix-ui/react-checkbox'

import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'Pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '2px solid $gray900',

  transition: 'border-color 0.25s',

  "&[data-state='checked']": {
    borderColor: '$ignite300',
  },

  "&:focus, &[data-state='checked']": {
    border: '2px solid $ignite300',
  },
})

const fadeIn = keyframes({
  from: {
    transform: 'scale(0)',
    opacity: 0,
  },
  to: {
    transform: 'scale(1)',
    opacity: 1,
  },
})

const fadeOut = keyframes({
  from: {
    transform: 'scale(1)',
    opacity: 1,
  },
  to: {
    transform: 'scale(0)',
    opacity: 0,
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  "&[data-state='checked']": {
    animation: `${fadeIn} 200ms ease-out`,
  },

  "&[data-state='unchecked']": {
    animation: `${fadeOut} 200ms ease-out`,
  },
})

CheckboxContainer.displayName = 'CheckboxContainer'
CheckboxIndicator.displayName = 'CheckboxIndicator'
