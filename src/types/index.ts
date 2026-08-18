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

export interface Service {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  whatsappMessage: string;
}

export type ButtonVariant = "primary" | "secondary" | "light" | "outline";
export type ButtonType = "button" | "submit" | "reset";
export type FloatingButtonPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";
