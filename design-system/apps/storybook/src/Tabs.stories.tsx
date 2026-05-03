import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Box } from '@taskflow/components';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' },
    ],
    value: 'tab1',
  },
};

export const WithPanels: Story = {
  render: () => {
    const tabs = [
      { label: 'Overview', value: 'overview' },
      { label: 'Analytics', value: 'analytics' },
      { label: 'Settings', value: 'settings' },
    ];

    return (
      <>
        <Tabs tabs={tabs} value="overview" />
        <Box sx={{ p: 3 }}>
          <p>Content for the selected tab would go here.</p>
        </Box>
      </>
    );
  },
};

export const Centered: Story = {
  args: {
    tabs: [
      { label: 'Home', value: 'home' },
      { label: 'About', value: 'about' },
      { label: 'Contact', value: 'contact' },
    ],
    value: 'home',
    centered: true,
  },
};

export const Scrollable: Story = {
  args: {
    tabs: Array.from({ length: 15 }, (_, i) => ({
      label: `Tab ${i + 1}`,
      value: `tab${i + 1}`,
    })),
    value: 'tab1',
    variant: 'scrollable',
    scrollButtons: 'auto',
  },
};
