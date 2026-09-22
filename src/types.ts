export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  guestCount: number;
  cateringSelected: 'external' | 'shrutham-premium' | 'none';
  notes: string;
  status: 'Inquired' | 'Confirmed' | 'Tour Scheduled' | 'Cancelled';
  createdAt: string;
}

export interface Facility {
  id: string;
  name: string;
  icon: string;
  spec: string;
  desc: string;
  capacityRange?: string;
}

export interface EventCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  desc: string;
  maxCapacity: string;
  suitableSpaces: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  stars: number;
  text: string;
  eventType: string;
  avatar?: string;
}
