import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleButtonGroup, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/ToggleButton',
  component: ToggleButtonGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');
    return (
      <ToggleButtonGroup
        value={alignment}
        onChange={setAlignment}
        options={[
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ]}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [formats, setFormats] = useState(['bold']);
    return (
      <ToggleButtonGroup
        value={formats}
        onChange={setFormats}
        multiple
        options={[
          { value: 'bold', label: 'Bold' },
          { value: 'italic', label: 'Italic' },
          { value: 'underline', label: 'Underline' },
        ]}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <ToggleButtonGroup
        size="small"
        value="left"
        options={[
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ]}
      />
      <ToggleButtonGroup
        size="medium"
        value="left"
        options={[
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ]}
      />
      <ToggleButtonGroup
        size="large"
        value="left"
        options={[
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ]}
      />
    </Stack>
  ),
};
