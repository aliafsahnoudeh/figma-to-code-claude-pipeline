import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

export interface AvatarProps extends MuiAvatarProps {
  /**
   * User name - used to generate initials if no image is provided
   */
  name?: string;

  /**
   * Image URL for the avatar
   */
  imageUrl?: string;

  /**
   * Children content (text, icon, or image element)
   */
  children?: React.ReactNode;
}

/**
 * Avatar component - flexible wrapper around MUI Avatar
 *
 * Displays user profile images, initials, or icons.
 * Automatically generates initials from name if no children or imageUrl provided.
 *
 * @example
 * ```tsx
 * <Avatar name="John Doe" />
 * <Avatar imageUrl="/path/to/image.jpg" />
 * <Avatar>JD</Avatar>
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { name, imageUrl, children, alt, src, ...props },
  ref
) {
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(/\s+/);
    if (names.length === 0) return '';
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const finalSrc = imageUrl || src;
  const finalAlt = alt || name;
  const finalChildren = children || (name ? getInitials(name) : undefined);

  return (
    <MuiAvatar ref={ref} src={finalSrc} alt={finalAlt} {...props}>
      {finalChildren}
    </MuiAvatar>
  );
});
