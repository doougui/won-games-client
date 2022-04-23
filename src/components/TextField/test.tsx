import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('renders with label', () => {
    render(<TextField label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('renders without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('renders with icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders with icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('changes its value when typing', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('is accessible by tab', () => {
    render(<TextField label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('does not change its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('is not accessible by tab when disabled', () => {
    render(<TextField label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})

it('renders with error', () => {
  const { container } = render(
    <TextField
      icon={<Email data-testid="icon" />}
      label="TextField"
      name="TextField"
      error="Error message"
    />
  )

  expect(screen.getByText('Error message')).toBeInTheDocument()

  expect(container.firstChild).toMatchSnapshot()
})
