import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)

    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logs in', () => {
    it('display user profile picture', async () => {
      render(MainNav)

      let profilePicture = screen.queryByRole('img', {
        name: /user profile image/i
      })
       
      expect(profilePicture).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })

      await userEvent.click(loginButton)

      profilePicture = screen.  queryByRole('img', {
        name: /user profile image/i
      })
      expect(profilePicture).toBeInTheDocument()
    })
  })
})

