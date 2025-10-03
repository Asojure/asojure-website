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
}

export interface BusinessHours {
  WEEKDAY: string;
  SATURDAY: string;
  NOTE: string;
}

export interface ContactDetails {
  PHONE: string;
  LANDLINE: string;
  EMAIL_PRIMARY: string;
  EMAIL_SECONDARY: string;
  ADDRESS: string;
  WHATSAPP: string;
  WHATSAPP_LINK: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'light';
export type ButtonType = 'button' | 'submit' | 'reset';
export type FloatingButtonPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

