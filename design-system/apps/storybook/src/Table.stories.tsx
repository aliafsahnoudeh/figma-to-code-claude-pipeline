import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@taskflow/components';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager' },
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'role', label: 'Role' },
];

export const Default: Story = {
  args: {
    columns,
    rows: sampleData,
    getRowKey: (row) => row.id,
  },
};

export const Elevated: Story = {
  args: {
    columns,
    rows: sampleData,
    getRowKey: (row) => row.id,
    elevated: true,
  },
};

export const Dense: Story = {
  args: {
    columns,
    rows: sampleData,
    getRowKey: (row) => row.id,
    dense: true,
  },
};

export const WithCustomRender: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Name' },
      { id: 'email', label: 'Email' },
      {
        id: 'role',
        label: 'Role',
        render: (row) => <strong>{row.role}</strong>,
      },
    ],
    rows: sampleData,
    getRowKey: (row) => row.id,
  },
};

export const AlignedColumns: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Name', align: 'left' },
      { id: 'email', label: 'Email', align: 'center' },
      { id: 'role', label: 'Role', align: 'right' },
    ],
    rows: sampleData,
    getRowKey: (row) => row.id,
  },
};
