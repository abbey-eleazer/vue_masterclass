import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MainNav from '@/components/Navigation/MainNav.vue'
import { describe, expect } from 'vitest'
import { RouterLinkStub } from '@vue/test-utils'


describe('MainNav', () => {

  const renderMainNav = () => {
    const $route = {
      name: 'Home',
    }

    render(MainNav, {
      global: {
        mocks: {
          $route
        },
        
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        }
      },
    })
  }
  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    renderMainNav()
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
      renderMainNav()

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

