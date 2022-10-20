import * as React from 'react'
import { describe, expect, test } from 'vitest'

import { Stacked, zLayers } from './Stacked'

import { render, screen } from '@testing-library/react'

describe('Stacked component', () => {
  test('should render children', () => {
    const content = 'lorem ipsum dolor sit amet'
    render(
      <Stacked layer="modal" as="p">
        {content}
      </Stacked>
    )
    expect(screen.getByText(content)).toBeTruthy()
  })

  test('should render primitives correctly', () => {
    const content = 'lore ipsum dolor sit amet consectetur'
    render(
      <Stacked layer="modal" as="section">
        {content}
      </Stacked>
    )
    expect(screen.getByText(content).tagName.toLowerCase()).toBe('section')
  })

  test('should set z-index correctly', () => {
    const [content1, content2] = ['lorem ipsum', 'sit amet consectetur']
    render(
      <>
        <Stacked layer="modal">{content1}</Stacked>
        <Stacked layer="ceiling">{content2}</Stacked>
      </>
    )
    expect(screen.getByText(content1).style.zIndex).toBe(
      zLayers.modal.toString()
    )
    expect(screen.getByText(content2).style.zIndex).toBe(
      zLayers.ceiling.toString()
    )
  })

  test('should set z-index correctly with `above`', () => {
    const [content1, content2] = ['sit amet', 'consectetur adipiscing']
    render(
      <>
        <Stacked layer="base" above>
          {content1}
        </Stacked>
        <Stacked layer="base" above={3}>
          {content2}
        </Stacked>
      </>
    )
    expect(screen.getByText(content1).style.zIndex).toBe(
      (zLayers.base + 1).toString()
    )
    expect(screen.getByText(content2).style.zIndex).toBe(
      (zLayers.base + 3).toString()
    )
  })

  test('should set z-index correctly with `below`', () => {
    const [content1, content2] = [
      'lorem ipsum something',
      'another lorem ipsum',
    ]
    render(
      <>
        <Stacked layer="offCanvas" below>
          {content1}
        </Stacked>
        <Stacked layer="offCanvas" below={5}>
          {content2}
        </Stacked>
      </>
    )
    expect(screen.getByText(content1).style.zIndex).toBe(
      (zLayers.offCanvas - 1).toString()
    )
    expect(screen.getByText(content2).style.zIndex).toBe(
      (zLayers.offCanvas - 5).toString()
    )
  })
})
