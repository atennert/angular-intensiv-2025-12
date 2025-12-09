import { CanDeactivateFn } from '@angular/router';

export const confirmLeaveGuard: CanDeactivateFn<unknown> = () => {
  return window.confirm('Do you really want to leave?');
};
