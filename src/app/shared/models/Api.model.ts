export interface ApiResponse<T> {
  error: boolean;
  status: number;
  data: T;
}
