import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Definir un interceptor funcional
export const loggingInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  console.log('URL de la solicitud: ' + req.url);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error en el interceptor funcional:', error);
      return throwError(() => error);
    })
  );
}
