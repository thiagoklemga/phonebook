export interface Contact {
  firstname: string;
  lastname: string;
  phone: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: Contact[];
}
