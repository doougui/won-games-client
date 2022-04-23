import { CartContext, CartContextDefaultValues } from 'hooks/use-cart';
import * as NextImage from "next/image";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.lightBg,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}>
          <GlobalStyles removeBg />
          <Story />
        </CartContext.Provider>
      </ThemeProvider>
    )
  }
]
