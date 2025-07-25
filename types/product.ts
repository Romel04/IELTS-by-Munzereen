// types/product.ts

export interface Media {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface CtaText {
  name: string;     // e.g. "Enroll"
  value: string;    // e.g. "enroll"
}

export interface SectionValue {
  id: string;
  title?: string;
  description?: string;
  name?: string;
  slug?: string;
  short_description?: string;
  image?: string;
  // For features section values
  subtitle?: string;
  icon?: string;
  checklist?: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  // For pointers values
  text?: string;
  // For FAQ values
  question?: string;
  answer?: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML content
  platform: string;
  type: string;
  modality: string;
  media: Media[];
  checklist: ChecklistItem[];
  seo: any[]; // empty or actual SEO object
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: ProductData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}
