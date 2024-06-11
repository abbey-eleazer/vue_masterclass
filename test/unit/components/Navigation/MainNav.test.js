import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import MainNav from '@/components/Navigation/MainNav.vue'
import { useUserStore } from '@/Stores/user'


describe('MainNav', () => {

  const renderMainNav = () => {
    const pinia = createTestingPinia({ stubActions: false})
    const $route = {
      name: 'Home',
    }

    render(MainNav, {
      global: {
        plugins: [ pinia ],
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
      const userStore = useUserStore()

      let profilePicture = screen.queryByRole('img', {
        name: /user profile image/i
      })
       
      expect(profilePicture).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      userStore.isLoggedIn = true
      await userEvent.click(loginButton)

      profilePicture = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profilePicture).toBeInTheDocument()
    })
  })
})

