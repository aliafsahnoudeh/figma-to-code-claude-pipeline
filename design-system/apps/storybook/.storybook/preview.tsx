import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@taskflow/themes';
import { getAvailableProducts } from '@taskflow/themes';

// Get available product themes
const availableProducts = getAvailableProducts();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
    productTheme: {
      name: 'Product Theme',
      description: 'Select a product theme to preview',
      defaultValue: availableProducts[0] || 'taskflow',
      toolbar: {
        icon: 'paintbrush',
        items: availableProducts.map((product) => ({
          value: product,
          title: product.charAt(0).toUpperCase() + product.slice(1).replace('-', ' '),
        })),
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const productKey = context.globals.productTheme || 'taskflow';

      return (
        <ThemeProvider productKey={productKey}>
          <div style={{ padding: '1rem' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
