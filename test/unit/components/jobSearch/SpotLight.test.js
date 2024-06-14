import { render,screen } from '@testing-library/vue'

import SpotLight from '@/components/jobSearch/SpotLight.vue'
import axios from 'axios'

vi.mock('axios')
describe('SpotLight', () => {

  const mockSpotlightResponse = (spotlight = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: 'some image',
          title: 'some title',
          description: 'some description',
          ...spotlight
        }
      ]
    })
  }
  it('provides image to parent component', async () => {
    const spotlight = {img: 'other image'}
    mockSpotlightResponse(spotlight)

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps"> <h2>{{ slotProps.img }} </h2> </template>`
      }

    })

    const text = await screen.findByText('other image')
    expect(text).toBeInTheDocument()
  })

  it('provides title to parent component', async () => {
    const spotlight = {title: 'other title'}
    mockSpotlightResponse(spotlight)

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps"> <h2>{{ slotProps.title }} </h2> </template>`
      }

    })

    const text = await screen.findByText('other title')
    expect(text).toBeInTheDocument()
  })

  it('provides description to parent component', async () => {
    const spotlight = {description: 'other description'}
    mockSpotlightResponse(spotlight)

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps"> <h2>{{ slotProps.description }} </h2> </template>`
      }

    })

    const text = await screen.findByText('other description')
    expect(text).toBeInTheDocument()
  })
})