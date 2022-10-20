import * as React from 'react'

import type { PrimitiveComponent } from '@/types'
import { clsxm } from '@zolplay/utils'

const LAYER_INCREMENT = 1

export const zLayers = Object.freeze({
  base: 0,
  content: 50,
  dropdown: 1000,
  sticky: 2000,
  modalBackdrop: 3000,
  offCanvas: 4000,
  modal: 5000,
  popover: 6000,
  tooltip: 7000,
  ceiling: 10000,
})

type StackedProps = {
  layer: keyof typeof zLayers
  above?: boolean | number
  below?: boolean | number
}
export const Stacked: PrimitiveComponent<StackedProps> = ({
  className,
  children,
  layer = 'content',
  as,
  above,
  below,
}) => {
  React.useEffect(() => {
    if (above && below) {
      throw new Error('Cannot use both above and below props')
    }
  }, [above, below])

  const zIndex = React.useMemo(() => {
    const layerIndex = zLayers[layer]

    if (above) {
      return (
        layerIndex + LAYER_INCREMENT * (typeof above === 'number' ? above : 1)
      )
    } else if (below) {
      return (
        layerIndex - LAYER_INCREMENT * (typeof below === 'number' ? below : 1)
      )
    }

    return layerIndex
  }, [layer, above, below])
  const Element = as || 'div'

  return (
    <Element
      className={clsxm('relative', className)}
      style={{
        zIndex,
      }}
    >
      {children}
    </Element>
  )
}
