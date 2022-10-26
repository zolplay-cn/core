/* eslint-disable @typescript-eslint/ban-types */
import type { FC, PropsWithChildren } from 'react'

// CSS custom variables
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export type ComponentProps<P = {}> = PropsWithChildren<
  {
    className?: string
  } & P
>
export type Component<P = {}> = FC<ComponentProps<P>>

export type PrimitiveComponent<P = {}> = Component<
  P & { as?: keyof JSX.IntrinsicElements }
>

export type LayoutProps<P = {}> = PropsWithChildren<P>
export type LayoutComponent<P = {}> = FC<LayoutProps<P>>
