import { fireEvent, screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open/close modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // Select the modal
    const modal = screen.getByLabelText('modal')

    // Verifiy if the menu full is hidden
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // Click the open menu button and assert that it's open and not hidden
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })

    // Click the close menu button and assert that it's closed and hidden
    // fireEvent.click(screen.getByLabelText(/close menu/i))
    // expect(modal.getAttribute('aria-hidden')).toBe('true')
    // expect(modal).toHaveStyle({ opacity: 0 })
  })
})
