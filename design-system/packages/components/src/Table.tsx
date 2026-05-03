import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { SxProps, Theme } from '@mui/material/styles';

export interface TableColumn<T = any> {
  id: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  render?: (row: T) => React.ReactNode;
}

export interface TableProps<T = any> {
  /**
   * Table columns configuration
   */
  columns: TableColumn<T>[];

  /**
   * Table data rows
   */
  rows: T[];

  /**
   * Get unique key for each row
   */
  getRowKey: (row: T) => string | number;

  /**
   * Show table container with elevation
   * @default false
   */
  elevated?: boolean;

  /**
   * Sticky header
   * @default false
   */
  stickyHeader?: boolean;

  /**
   * Dense padding
   * @default false
   */
  dense?: boolean;

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
 * Table component with curated API
 *
 * Simple table wrapper around MUI Table.
 * Styling is driven by design tokens via theme overrides.
 *
 * @example
 * ```tsx
 * <Table
 *   columns={[
 *     { id: 'name', label: 'Name' },
 *     { id: 'email', label: 'Email' },
 *   ]}
 *   rows={users}
 *   getRowKey={(user) => user.id}
 * />
 * ```
 */
export function Table<T = any>({
  columns,
  rows,
  getRowKey,
  elevated = false,
  stickyHeader = false,
  dense = false,
  sx,
  className,
}: TableProps<T>) {
  const tableContent = (
    <MuiTable stickyHeader={stickyHeader} size={dense ? 'small' : 'medium'} sx={sx}>
      <MuiTableHead>
        <MuiTableRow>
          {columns.map((column) => (
            <MuiTableCell key={column.id} align={column.align}>
              {column.label}
            </MuiTableCell>
          ))}
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        {rows.map((row) => (
          <MuiTableRow key={getRowKey(row)}>
            {columns.map((column) => (
              <MuiTableCell key={column.id} align={column.align}>
                {column.render ? column.render(row) : (row as any)[column.id]}
              </MuiTableCell>
            ))}
          </MuiTableRow>
        ))}
      </MuiTableBody>
    </MuiTable>
  );

  if (elevated) {
    return (
      <MuiTableContainer component={Paper} className={className}>
        {tableContent}
      </MuiTableContainer>
    );
  }

  return <MuiTableContainer className={className}>{tableContent}</MuiTableContainer>;
}
