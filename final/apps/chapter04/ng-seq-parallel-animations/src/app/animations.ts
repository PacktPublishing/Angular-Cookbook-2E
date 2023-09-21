import { trigger, style, transition, animate, query, group } from '@angular/animations';

const duration = '1.5s';

export const cardAnimation = trigger('cardAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 }),
    ]),
    group([
      query(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate(`${duration} ease`, style({
          transform: 'translateX(100%)',
        })
        ),
        animate(`${duration} ease`, style({
          opacity: 0,
        })
        ),
      ],
        { optional: true }
      ),
      query(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        }),
        animate(`${duration} ease`, style({
          transform: 'translateX(0)',
          opacity: 1,
        })
        ),
      ],
        { optional: true }
      ),
    ])
  ]),
]);