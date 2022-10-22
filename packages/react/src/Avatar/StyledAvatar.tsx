import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import stringHash from 'string-hash'
import tinycolor from 'tinycolor2'

import type { Component } from '@/types'
import type { AvatarFallbackProps } from '@radix-ui/react-avatar'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '@stitches/react'

const Root = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
})

const Image = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
})
const GradientSvg = styled('svg', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
})

type FallbackProps = AvatarFallbackProps & {
  name?: string
  randomColor?: boolean
}
const Fallback: Component<FallbackProps> = ({
  id,
  name,
  randomColor,
  children,
  ...props
}) => {
  const [fallbackId, setFallbackId] = useState('')

  useEffect(() => {
    setFallbackId(id ?? name ?? nanoid())
  }, [id, name])

  if (randomColor) {
    const encodedName = encodeURI(fallbackId.toString().split(' ').join('_'))
    const hashed = stringHash(encodedName)
    const c = tinycolor({ h: hashed % 360, s: 0.95, l: 0.5 })
    const c1 = c.toHexString()
    const c2 = c.triad()[1].toHexString()

    const gradientBackground = (
      <GradientSvg role="img" aria-label={name} viewBox="0 0 80 80">
        <defs>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            id={hashed.toString()}
          >
            <stop stopColor={c1} offset="0%" />
            <stop stopColor={c2} offset="100%" />
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none">
          <rect
            fill={`url(#${hashed.toString()})`}
            x="0"
            y="0"
            width="100%"
            height="100%"
          />
        </g>
      </GradientSvg>
    )

    return (
      <StyledFallback {...props}>
        {gradientBackground}
        {children}
      </StyledFallback>
    )
  }

  return <StyledFallback {...props}>{children}</StyledFallback>
}

const StyledAvatar = Object.assign({}, { Root, Image, Fallback })

export { StyledAvatar }
