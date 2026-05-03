import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@taskflow/components';

const meta = {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <BottomNavigation value={value} onChange={(event, newValue) => setValue(newValue)} showLabels>
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Profile" />
      </BottomNavigation>
    );
  },
};

export const WithoutLabels: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <BottomNavigation value={value} onChange={(event, newValue) => setValue(newValue)}>
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Search" />
        <BottomNavigationAction label="Profile" />
      </BottomNavigation>
    );
  },
};
