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
  }),

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.selectedOrganizations = []

        const store = useJobsStore()
        const job = { organization: 'Google'}

        const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)

        expect(result).toBe(true)
      })
    })
    it('identifies if job is associated with given organizations', () => {
      const userStore = useUserStore()
      userStore.selectedOrganizations = ['Google', 'Microsoft']
  
      const store = useJobsStore()
      const job = { organization: 'Google'}
  
      const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)
  
      expect(result).toBe(true)
    })
  })
  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const userStore = useUserStore()
        userStore.selectedJobTypes = []

        const store = useJobsStore()
        const job = { jobType: 'Part-time'}

        const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)

        expect(result).toBe(true)
      })
    })
    it('identifies if job is associated with given job type', () => {
      const userStore = useUserStore()
      userStore.selectedJobTypes = ['Part-time', 'Full-time']
  
      const store = useJobsStore()
      const job = { jobType: 'Part-time'}
  
      const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)
  
      expect(result).toBe(true)
    })
  })

})

})