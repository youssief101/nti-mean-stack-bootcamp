import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth';

export const authGuard: CanActivateFn = () => {

  const authService = inject(UserAuthService);
  const router = inject(Router);

  if (authService.isUserLogged()) {
    return true;
  }

  router.navigate(['/home']);
  return false;

}; 