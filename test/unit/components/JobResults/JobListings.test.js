import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from "@pinia/testing";
// import axios from 'axios'

import JobListings from '@/components/JobResult/JobListings.vue';
import { useJobsStore } from '@/Stores/jobs';

// vi.mock('axios')
describe('JobListings', () => {

  const createRoute = (queryParams = {}) => ({
    query: {
    page: '5',
    ...queryParams
    }
  }) 

  const renderJobListings = ($route) => {
    const pinia = createTestingPinia()   

    render(JobListings, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
  }

   it.only('fetches jobs',  () => {
    const $route = createRoute()
 
    renderJobListings($route)
    
    const jobStore = useJobsStore()
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled()
  })

   it('displays maximum of 10 jobs', async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '1'}
    const $route = createRoute(queryParams)
 
    renderJobListings($route)
    const jobStore = useJobsStore()
    jobStore.jobs = Array(15).fill({})

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
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '1'}
    const $route = createRoute(queryParams)

    renderJobListings($route)
    const jobStore = useJobsStore()
    jobStore.jobs = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const previousLink = screen.queryByRole('linl', { name: /previous/i})
     expect(previousLink).not.toBeInTheDocument()
    })

    it(' shows link to next page',async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '1'}
    const $route = createRoute(queryParams)

    renderJobListings($route)
    const jobStore = useJobsStore()
    jobStore.jobs = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const nextLink = screen.queryByRole('link', { name: /next/i})
     expect(nextLink).toBeInTheDocument()
    })
   })

   describe('when user is not on last page', () => {
    it('does not show link to next page', async () => {
      // axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '2'}
    const $route = createRoute(queryParams)

    renderJobListings($route)
    const jobStore = useJobsStore()
    jobStore.jobs = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const nextLink = screen.queryByRole('link', { name: /next/i})
     expect(nextLink).not.toBeInTheDocument()
    })

    it('shows link to previous page', async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const queryParams = {page: '2'}
    const $route = createRoute(queryParams)
    

    renderJobListings($route)
    const jobStore = useJobsStore()
    jobStore.jobs = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const previousLink = screen.queryByRole('link', { name: /previous/i})
    expect(previousLink).toBeInTheDocument()
    })
   })
})