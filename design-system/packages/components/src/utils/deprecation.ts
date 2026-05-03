/**
 * Log a deprecation warning in development mode
 */
export function logDeprecationWarning(componentName: string, message: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[DS Deprecation] ${componentName}: ${message}`);
  }
}

/**
 * Check if a deprecated prop is being used and log a warning
 */
export function warnDeprecatedProp(
  componentName: string,
  propName: string,
  alternative?: string
): void {
  const message = alternative
    ? `The prop '${propName}' is deprecated. Use '${alternative}' instead.`
    : `The prop '${propName}' is deprecated and will be removed in a future version.`;

  logDeprecationWarning(componentName, message);
}
