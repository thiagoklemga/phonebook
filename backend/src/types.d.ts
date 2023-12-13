export interface Contact {
  firstname: string;
  lastname: string;
  phone: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: Contact[];
}
