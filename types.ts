
export type Theme = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  city?: string;
  message: string;
  consent: boolean;
}
