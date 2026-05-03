import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

export interface TabItem {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  /**
   * Available tabs
   */
  tabs: TabItem[];

  /**
   * Currently active tab value
   */
  value: string | number;

  /**
   * Change handler
   */
  onChange: (value: string | number) => void;

  /**
   * Tab variant
   * @default 'standard'
   */
  variant?: 'standard' | 'scrollable' | 'fullWidth';

  /**
   * Tab orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Centered tabs
   * @default false
   */
  centered?: boolean;

  /**
   * Custom styles via MUI sx prop
   */
  sx?: SxProps<Theme>;

  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Tabs component
 *
 * Navigation component for switching between different views.
 * Styling is driven by design tokens via theme overrides.
 *
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     { label: 'Overview', value: 'overview' },
 *     { label: 'Settings', value: 'settings' },
 *   ]}
 *   value={activeTab}
 *   onChange={setActiveTab}
 * />
 * ```
 */
export function Tabs({
  tabs,
  value,
  onChange,
  variant = 'standard',
  orientation = 'horizontal',
  centered = false,
  sx,
  className,
}: TabsProps) {
  const handleChange = (_event: React.SyntheticEvent, newValue: string | number) => {
    onChange(newValue);
  };

  return (
    <Box sx={sx} className={className}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        variant={variant}
        orientation={orientation}
        centered={centered}
      >
        {tabs.map((tab) => {
          const tabProps: any = {
            key: tab.value,
            label: tab.label,
            value: tab.value,
            disabled: tab.disabled,
          };

          if (tab.icon) {
            tabProps.icon = tab.icon;
            tabProps.iconPosition = 'start';
          }

          return <MuiTab key={tab.value} {...tabProps} />;
        })}
      </MuiTabs>
    </Box>
  );
}
