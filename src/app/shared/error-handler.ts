import { throwError } from 'rxjs';

export function handleError(error: any) {
  console.log(error, 'error');
  if (error.status === 0) {
    console.error('An error occured', error);
  } else {
    console.error(
      `Backend returned code ${error.status}, body was: `,
      error.error
    );
  }

  return throwError(() => new Error('Something bad happened; please try'));
}
