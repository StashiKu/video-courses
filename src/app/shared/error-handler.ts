import { throwError } from 'rxjs';

// eslint-disable-next-line
export function handleError(error: any) {
  // console.log(error, 'error');
  if (error.status === 0) {
    console.error('An error occured', error);
  } else {
    console.error(
      `Backend returned code ${error.status}, body was: `,
      error.error
    );
  }

  return throwError(() => error);
}
