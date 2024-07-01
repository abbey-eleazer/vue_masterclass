import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from "@pinia/testing";
import { useRoute } from 'vue-router'
vi.mock('vue-router')

import JobListings from '@/components/JobResult/JobListings.vue';
import { useJobsStore } from '@/Stores/jobs';

// vi.mock('axios')
describe('JobListings', () => {

  const renderJobListings = () => {
    
    const pinia = createTestingPinia()  
    const jobStore = useJobsStore()
    jobStore.FILTERED_JOBS = Array(15).fill({})

    render(JobListings, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    return {jobStore}
  }

   it('fetches jobs',  () => {
    useRoute.mockReturnValue({ query: {} })
    const {jobStore} =  renderJobListings()
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled()
  })

   it('displays maximum of 10 jobs', async () => {
    useRoute.mockReturnValue({ query: { page: '1' } })
    const {jobStore} =  renderJobListings()
    jobStore.FILTERED_JOBS = Array(15).fill({})

    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
   })

   
   describe('when params exclude page number', () => {
    it('displays page number 1', () => {
    useRoute.mockReturnValue({ query: { page: '1' } })
    renderJobListings()

     expect(screen.getByText('Page 1')).toBeInTheDocument()
    })
   })

   describe('when params include page number', () => {
    it('displays page number 1', () => {
    useRoute.mockReturnValue({ query: { page: '3' } })
    renderJobListings()

     expect(screen.getByText('Page 3')).toBeInTheDocument()
    })
   })

   describe('when the user is on the firstpage', () => {
    it('does not show link to prrevious page',async () => {
    useRoute.mockReturnValue({ query: { page: '1' } })
    const {jobStore} =  renderJobListings()
    jobStore.FILTERED_JOBS = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const previousLink = screen.queryByRole('link', { name: /previous/i})
     expect(previousLink).not.toBeInTheDocument()
    })

    it(' shows link to next page',async () => {
      useRoute.mockReturnValue({ query: { page: '1' } })
      const {jobStore} =  renderJobListings()
      jobStore.FILTERED_JOBS = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const nextLink = screen.queryByRole('link', { name: /next/i})
     expect(nextLink).toBeInTheDocument()
    })
   })

   describe('when user is not on last page', () => {
    it('does not show link to next page', async () => {
    useRoute.mockReturnValue({ query: { page: '2' } })
    const {jobStore} =  renderJobListings()
    jobStore.FILTERED_JOBS = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const nextLink = screen.queryByRole('link', { name: /next/i})
     expect(nextLink).not.toBeInTheDocument()
    })

    it('shows link to previous page', async () => {
    useRoute.mockReturnValue({ query: { page: '2' } })
    const {jobStore} =  renderJobListings()
    jobStore.FILTERED_JOBS = Array(15).fill({})

    await screen.findAllByRole('listitem')
    const previousLink = screen.queryByRole('link', { name: /previous/i})
    expect(previousLink).toBeInTheDocument()
    })
   })
})