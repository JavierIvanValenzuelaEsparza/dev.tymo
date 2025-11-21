export interface Testimonial {
  id: number;
  fullName: string;
  company: string;
  projectType: string;
  rating: number;
  opinion: string;
  createdAt: string;
}

export interface TestimonialFormData {
  fullName: string;
  company: string;
  projectType: string;
  rating: number;
  opinion: string;
}
