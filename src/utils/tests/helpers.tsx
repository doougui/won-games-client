import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import theme from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <MockedProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MockedProvider>
  )
