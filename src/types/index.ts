export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  subcategories?: string[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
  status: 'new' | 'contacted' | 'in-progress' | 'completed';
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  documents: Document[];
  status: 'active' | 'inactive';
  createdAt: Date;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  uploadedAt: Date;
  size: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
}