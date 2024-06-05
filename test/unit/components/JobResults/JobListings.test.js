import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import axios from 'axios'

import JobListings from '@/components/JobResult/JobListings.vue'  

vi.mock('axios')
describe('JobListings', () => {

  const createRoute = (queryParams = {}) => ({
    query: {
    page: '5',
    ...queryParams
    }
  }) 

  const renderJobListings = ($route) => {
       
    render(JobListings, {
      global: {
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
  }

   it('fetches jobs',  () => {
    axios.get.mockResolvedValue({ data: [] })

    const $route = createRoute()
 
    renderJobListings($route)
    
    expect(axios.get).toHaveBeenLastCalledWith('http://localhost:3000/jobs')
  })

   it('displays maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '1'}
    const $route = createRoute(queryParams)
 
    renderJobListings($route)


    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
   })

   
   describe('when params exclude page number', () => {
    it('displays page number 1', () => {
      const queryParams = {page: undefined}
    const $route = createRoute(queryParams)
    renderJobListings($route)

     expect(screen.getByText('Page 1')).toBeInTheDocument()
    })
   })

   describe('when params include page number', () => {
    it('displays page number 1', () => {
      const queryParams = {page: '3'}
    const $route = createRoute(queryParams)
    renderJobListings($route)

     expect(screen.getByText('Page 3')).toBeInTheDocument()
    })
   })

   describe('when the user is on the firstpage', () => {
    it('does not show link to prrevious page',async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '1'}
    const $route = createRoute(queryParams)

    renderJobListings($route)

    await screen.findAllByRole('listitem')
    const previousLink = screen.queryByRole('linl', { name: /previous/i})
     expect(previousLink).not.toBeInTheDocument()
    })

    it(' shows link to next page',async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '1'}
    const $route = createRoute(queryParams)

    renderJobListings($route)

    await screen.findAllByRole('listitem')
    const nextLink = screen.queryByRole('link', { name: /next/i})
     expect(nextLink).toBeInTheDocument()
    })
   })
})