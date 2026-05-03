/**
 * TaskFlow theme type augmentation.
 *
 * Adds optional `50..900` ramps to MUI's `PaletteColor` so themes can ship
 * full color scales without losing autocomplete on consumers.
 */

import type {} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}

export {};
