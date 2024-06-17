import { createPinia, setActivePinia } from "pinia"
import axios from "axios"

import { useJobsStore } from '@/Stores/jobs'
import { useUserStore } from "@/Stores/user"
import { describe, expect } from "vitest"

vi.mock('axios')
describe('state', () => {

  beforeEach( () => { 
    setActivePinia(createPinia())
})

it('stores job listings', () => {
  const store = useJobsStore()
  expect(store.jobs).toEqual([])
})
})

describe('actions', () => {
  
  beforeEach( () => { 
    setActivePinia(createPinia())
})

describe('FETCH_JOBS', () => {
  it('makes api requests and stores received jobs', async () => {
    axios.get.mockResolvedValue({ data: ['Job 1', 'Job 2'] })
    const store = useJobsStore()
    await store.FETCH_JOBS()
    expect(store.jobs).toEqual([ 'Job 1', 'Job 2'])
  })
})

describe('getters', ()=> {
  
  beforeEach( () => { 
    setActivePinia(createPinia())
})
  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from the list of jobs', () => {
        const store = useJobsStore()
        store.jobs = [
          { organization: 'Google'},
          { organization: 'Amazon'},
          { organization: 'Google'}
        ]

        const result = store.UNIQUE_ORGANIZATIONS
        expect(result).toEqual(new Set(['Google', 'Amazon']))
    })

  })

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job type from the list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [
        {jobType: 'part-time'},
        {jobType: 'full-time'},
      ]

      const result = store.UNIQUE_JOB_TYPES
      expect(result).toEqual(new Set(['part-time', 'full-time']))
    })
  })
})

  describe('FILTERED_JOBS_BY_ORGANIZATIONS', () => {
    it('identifies jobs that are associated with the given organizations', () => {
      const jobsStore = useJobsStore()
      jobsStore.jobs = [
        { organization: 'Google'},
        { organization: 'Microsoft'},
        { organization: 'Amazon'}
      ]

      const userStore = useUserStore()
      userStore.selectedOrganizations = ['Google', 'Microsoft']

      const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS

      expect(result).toEqual([
        { organization: 'Google'},
        { organization: 'Microsoft'}
      ])

    }),

    describe('when the user has not selected any organizations', () => {
      it('returns all jobs', () => {
        const jobsStore = useJobsStore()
        jobsStore.jobs = [
          { organization: 'Google'},
          { organization: 'Microsoft'},
          { organization: 'Amazon'}
        ]
  
        const userStore = useUserStore()
        userStore.selectedOrganizations = []
  
        const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS
  
        expect(result).toEqual([
          { organization: 'Google'},
          { organization: 'Microsoft'},
          { organization: 'Amazon'}

        ])
  
      })
    })

    
  })

  describe('FILTERED_JOBS_BY_JOB_TYPES', () => {
    it('identifies jobs that are associated with the given job types', () => {
      const jobsStore = useJobsStore()
      jobsStore.jobs = [
        { jobType: 'full-time'},
        { jobType: 'part-time'},
        { jobType: 'intern'},
      ]

      const userStore = useUserStore()
      userStore.selectedJobTypes = ['full-time','part-time']

      const result = jobsStore.FILTERED_JOBS_BY_JOB_TYPES

      expect(result).toEqual([
        { jobType: 'full-time'},
        { jobType: 'part-time'},
      ])

    })
  }),

  
  describe('when the user has not selected any job types', () => {
    it('returns all jobs', () => {
      const jobsStore = useJobsStore()
      jobsStore.jobs = [
        { jobType: 'full-time'},
        { jobType: 'part-time'},
        { jobType: 'intern'},
      ]

      const userStore = useUserStore()
      userStore.selectedJobTypes = []

      const result = jobsStore.FILTERED_JOBS_BY_JOB_TYPES

      expect(result).toEqual([
        { jobType: 'full-time'},
        { jobType: 'part-time'},
        { jobType: 'intern'},
      ])

    })
  })

})