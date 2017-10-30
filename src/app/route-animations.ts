import { trigger, animate, style, group, query, transition } from '@angular/animations';
export const routerTransition = trigger('routerTransition', [
    transition('* => slideup', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(500px)' }),
                animate('0.3s ease-out', style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
            ], { optional: true })
        ])
    ]),
    transition('* => slideleft', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':leave', [
                style({ transform: 'translateX(0%)', zIndex: '0' }),
                animate('0.6s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
            query(':enter', [
                style({ transform: 'translateX(500px)', zIndex: '1' }),
                animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ]),
    transition('* => slideright', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':leave', [
                style({ transform: 'translateX(0%)', zIndex: '0' }),
                animate('0.6s ease-in-out', style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
            query(':enter', [
                style({ transform: 'translateX(-500px)', zIndex: '1' }),
                animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ]),
    transition('* => slidedown', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
            ], { optional: true })
        ])
    ]),
]);