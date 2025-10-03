/**
 * Type definitions for reusable components and data structures
 */

export interface ContactInfo {
  icon: string | string[];
  title: string;
  content: string;
  link?: string;
  id?: string;
}

export type ButtonVariant = "primary" | "secondary" | "light";
export type ButtonType = "button" | "submit" | "reset";
export type FloatingButtonPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";
