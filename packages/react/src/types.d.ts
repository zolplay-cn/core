import type { FC, PropsWithChildren } from 'react'

// CSS custom variables
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Component<P = {}> = FC<
  PropsWithChildren<
    {
      className?: string
    } & P
  >
>

// eslint-disable-next-line @typescript-eslint/ban-types
export type PrimitiveComponent<P = {}> = Component<
  P & { as?: keyof JSX.IntrinsicElements }
>
