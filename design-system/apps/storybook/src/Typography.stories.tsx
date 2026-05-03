import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </Stack>
  ),
};

export const Body: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body1">
        Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="body2">
        Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Stack>
  ),
};

export const Special: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">Overline text</Typography>
      <Typography variant="button">Button text</Typography>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography color="primary">Primary color</Typography>
      <Typography color="secondary">Secondary color</Typography>
      <Typography color="error">Error color</Typography>
      <Typography color="warning">Warning color</Typography>
      <Typography color="info">Info color</Typography>
      <Typography color="success">Success color</Typography>
      <Typography color="text.primary">Text primary</Typography>
      <Typography color="text.secondary">Text secondary</Typography>
    </Stack>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Stack>
  ),
};
