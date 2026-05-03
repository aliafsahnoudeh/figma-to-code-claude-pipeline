import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@taskflow/components';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleAPI: Story = {
  args: {
    items: [
      {
        id: 'panel1',
        summary: 'Accordion 1',
        details: 'This is the content of the first accordion.',
      },
      {
        id: 'panel2',
        summary: 'Accordion 2',
        details: 'This is the content of the second accordion.',
      },
      {
        id: 'panel3',
        summary: 'Accordion 3',
        details: 'This is the content of the third accordion.',
        disabled: true,
      },
    ],
  },
};

export const CompositionalAPI: Story = {
  render: () => (
    <>
      <Accordion>
        <AccordionSummary>
          <Typography>General Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Configure your general application settings here.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Security</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Manage security and privacy settings.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary>
          <Typography>Advanced (Coming Soon)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Advanced configuration options.</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  ),
};
