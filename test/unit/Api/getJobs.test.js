import { axios } from 'axios'


import getJobs from '@/Api/getJobs'

vi.mock('axios')

describe('getJobs', () => {

  beforeEach( () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Java Enginner'
        }
      ] 
    })
  })
  it('fetches jobs that users can apply to', async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs')
  })

  it('extracts the jobs from the response', async () => {
    const jobs = await getJobs()
     expect(jobs).toEqual([{id: 1, title:'Java Enginner' }])
  })
})