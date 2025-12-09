import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserStateService } from './user-state.service';

export const isUserAuthenticatedGuard: CanMatchFn = () => {
  const userState = inject(UserStateService);
  return userState.isLoggedIn();
};
