import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Fade,
  Grow,
  Slide,
  Zoom,
  Collapse,
  Button,
  Paper,
  Stack,
  Box,
} from '@taskflow/components';

const meta = {
  title: 'Components/Transitions',
  component: Fade,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FadeTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <Stack spacing={2}>
        <Button onClick={() => setShow(!show)}>Toggle Fade</Button>
        <Fade in={show}>
          <Paper sx={{ p: 2 }}>Fade Transition</Paper>
        </Fade>
      </Stack>
    );
  },
};

export const GrowTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <Stack spacing={2}>
        <Button onClick={() => setShow(!show)}>Toggle Grow</Button>
        <Box>
          <Grow in={show}>
            <Paper sx={{ p: 2 }}>Grow Transition</Paper>
          </Grow>
        </Box>
      </Stack>
    );
  },
};

export const SlideTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <Stack spacing={2}>
        <Button onClick={() => setShow(!show)}>Toggle Slide</Button>
        <Box sx={{ overflow: 'hidden', height: 60 }}>
          <Slide direction="up" in={show}>
            <Paper sx={{ p: 2 }}>Slide Transition</Paper>
          </Slide>
        </Box>
      </Stack>
    );
  },
};

export const ZoomTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <Stack spacing={2}>
        <Button onClick={() => setShow(!show)}>Toggle Zoom</Button>
        <Box>
          <Zoom in={show}>
            <Paper sx={{ p: 2 }}>Zoom Transition</Paper>
          </Zoom>
        </Box>
      </Stack>
    );
  },
};

export const CollapseTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <Stack spacing={2}>
        <Button onClick={() => setShow(!show)}>Toggle Collapse</Button>
        <Collapse in={show}>
          <Paper sx={{ p: 2 }}>
            <div>Collapse Transition</div>
            <div>With multiple lines</div>
            <div>Of content</div>
          </Paper>
        </Collapse>
      </Stack>
    );
  },
};
