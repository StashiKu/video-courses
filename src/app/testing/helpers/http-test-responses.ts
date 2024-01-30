import { HttpErrorResponse } from "@angular/common/http";

export const errorResponse404 = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found',
  });