export interface LeadFormData {
  fullName: string;
  phone: string;
  question: string;
}

export interface AdvantageItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  period: string;
  comment: string;
  avatar: string;
  monthlyIncome: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
