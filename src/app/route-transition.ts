import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeTransition = trigger('routeTraansition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('750ms', style({ transform: 'translateX(-100%)' })),
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('750ms', style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
  ]),
]);
