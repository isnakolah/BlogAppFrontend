interface ServiceError {
  message: string;
  code: number;
}

export interface ServiceResult<T> {
  succeeded: boolean;
  error: ServiceError;
  data: T;
}

export interface PaginatedServiceResult<T> extends ServiceResult<T[]> {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  from: string;
  to: string;
  firstPage: string;
  lastPage: string;
  nextPage: string;
  previousPage: string;
}
