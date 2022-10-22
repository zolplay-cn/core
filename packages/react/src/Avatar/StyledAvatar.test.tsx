import * as React from 'react'
import { describe, expect, test } from 'vitest'

import { StyledAvatar } from './StyledAvatar'

import { render, screen } from '@testing-library/react'

describe('StyledAvatar component', () => {
  test('should render correctly', () => {
    render(
      <StyledAvatar.Root>
        <StyledAvatar.Image src="https://i.pravatar.cc/300" alt="Avatar" />
        <StyledAvatar.Fallback randomColor>AB</StyledAvatar.Fallback>
      </StyledAvatar.Root>
    )
    expect(screen.getByText('AB')).toBeTruthy()
  })
})
