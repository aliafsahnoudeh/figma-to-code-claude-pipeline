import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button, CardHeader, CardContent, CardActions } from '@taskflow/components';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <CardContent>This is the card content.</CardContent>,
  },
};

export const WithTitle: Story = {
  render: () => (
    <Card>
      <CardHeader title="Card Title" />
      <CardContent>This is the card content with a title.</CardContent>
    </Card>
  ),
};

export const WithSubtitle: Story = {
  render: () => (
    <Card>
      <CardHeader title="Card Title" subheader="Card subtitle" />
      <CardContent>This is the card content with title and subtitle.</CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card>
      <CardHeader title="User Profile" subheader="Manage your account" />
      <CardContent>Your profile information and settings.</CardContent>
      <CardActions>
        <Button variant="text" size="small">
          Cancel
        </Button>
        <Button variant="contained" size="small">
          Save
        </Button>
      </CardActions>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card elevation={0}>
      <CardHeader title="Flat Card" />
      <CardContent>This card has no elevation/shadow.</CardContent>
    </Card>
  ),
};
