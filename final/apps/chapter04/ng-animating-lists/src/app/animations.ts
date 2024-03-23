import { trigger, style, animate, transition, stagger, query } from '@angular/animations'; 

export const ANIMATIONS = { 
  LIST_ITEM_ANIMATION: trigger('listItemAnimation', [ 
    transition('* <=> *', [ 
      query( 
        ':enter', 
        [ 
          style({ opacity: 0 }), 
          stagger(100, [ 
            animate('0.5s ease', style({ opacity: 1 })) 
          ]), 
        ], 
        { optional: true } 
      ),
      query( 
        ':leave', 
        [ 
          style({ opacity: 1 }), 
          animate('0.5s ease', style({ opacity: 0 })) 
        ], 
        { optional: true } 
      ), 
    ]),
  ]), 
};