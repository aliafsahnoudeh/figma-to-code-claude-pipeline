import type { Meta, StoryObj } from '@storybook/react';
import { Stepper, Step, StepLabel, Button, Stack } from '@taskflow/components';
import { useState } from 'react';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = ['Select campaign', 'Create ad group', 'Create ad'];

export const Horizontal: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
      <Stack spacing={2}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stack direction="row" spacing={2}>
          <Button disabled={activeStep === 0} onClick={() => setActiveStep((prev) => prev - 1)}>
            Back
          </Button>
          <Button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
      <Stack spacing={2}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stack direction="row" spacing={2}>
          <Button disabled={activeStep === 0} onClick={() => setActiveStep((prev) => prev - 1)}>
            Back
          </Button>
          <Button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    );
  },
};
