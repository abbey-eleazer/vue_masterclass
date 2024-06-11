import { screen, render } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"

import JobListing from "@/components/JobResult/JobListing.vue"

describe('JobListing', () => {

  const createJobProps = ( jobProps = {} ) => ({
    title: 'Vue Developer',
    organization: 'Accra',
    locations: ['New York'],
    minimumQualifications: ['Code'],
    ...jobProps
  })

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
         'router-link': RouterLinkStub,
        }
      },
      props:{
        job: {
          ...jobProps
        }
      }
    })
  }
  it('renders job title', () => {
    
    const jobProps = createJobProps({title:'vue programmer'})
    
    renderJobListing(jobProps)
    expect(screen.getByText('vue programmer')).toBeInTheDocument()
   }),

   it('renders jobs organization', () => {
    const jobProps = createJobProps({organization:'Google'})
    
    renderJobListing(jobProps)
      
     expect(screen.getByText('Google')).toBeInTheDocument()
    })

    it('renders job locations', () => {
      const jobProps = createJobProps({
        locations: ['Yokohama','USA']
      })
      renderJobListing(jobProps)
      expect(screen.getByText('Accra')).toBeInTheDocument()
      expect(screen.getByText('Yokohama')).toBeInTheDocument()
    })

    it('renders job minimumQualifications', () => {
      const jobProps = createJobProps({
        minimumQualifications: ['Code', 'Develop']
      })
      renderJobListing(jobProps)

      expect(screen.getByText('Code')).toBeInTheDocument()
      expect(screen.getByText('Develop')).toBeInTheDocument()
    })
})
