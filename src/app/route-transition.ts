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

export const routeTransition = trigger('routeTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    query(':enter', style({ transform: 'translateX(100%)' }), {
      optional: true,
    }),
    sequence([
      query(':leave', animateChild(), {
        optional: true,
      }),
      group([
        query(
          ':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate('750ms', style({ transform: 'translateX(-100%)' })),
          ],
          {
            optional: true,
          }
        ),
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)' }),
            animate('750ms', style({ transform: 'translateX(0%)' })),
          ],
          {
            optional: true,
          }
        ),
      ]),
      query(':enter', animateChild(), {
        optional: true,
      }),
    ]),
  ]),
]);
