import { trigger, animate, stagger, group, keyframes, animateChild, transition, style, query } from '@angular/animations';




export const testAnimation = trigger('routerAnimations', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', left: 0, right: 0}), { optional: true }),
        query(':leave', style({ opacity:1 }), { optional: true }),
        // query(':enter', style({ opacity:0, transform: 'scale(0.0)' }), { optional: true }),
        group([
            query(':leave', group([
            animate('1s', style({ opacity: 0 })), 
            animateChild()
            ]), { optional: true }),
            // query(':enter', group([
            // animate('1.5s 600ms ease-in', style({ opacity:1, transform: 'scale(1.0)' })),
            // animateChild()
            // ]), { optional: true })
        ])
    ])
]);




export const zoomAnimation = trigger('routerAnimations', [
                                transition('* => *', [
                                    query(':enter, :leave', style({ position: 'absolute', left: 0, right: 0}), { optional: true }),
                                    query(':leave', style({ opacity:1, transform: 'scale(1.0)' }), { optional: true }),
                                    query(':enter', style({ opacity:0, transform: 'scale(0.0)' }), { optional: true }),
                                    group([
                                        query(':leave', group([
                                        animate('1s', style({ opacity: 0,transform: 'scale(0.0)' })), 
                                        animateChild()
                                        ]), { optional: true }),
                                        query(':enter', group([
                                        animate('1.5s 600ms ease-in', style({ opacity:1, transform: 'scale(1.0)' })),
                                        animateChild()
                                        ]), { optional: true })
                                    ])
                                ])
                            ]);


export const fadeAnimation = trigger('routerAnimations', [
                                transition('login <=> register', [
                                    query(':enter, :leave', style({ position: 'absolute', left: 0, right: 0 }), { optional: true }),
                                    query(':leave', style({ opacity:1 }), { optional: true }),
                                    query(':enter', style({ opacity:0 }), { optional: true }),
                                    group([
                                        query(':leave', group([
                                        animate('1s cubic-bezier(.35,0,.25,1)', style({ opacity: 0 })), 
                                        animateChild()
                                        ]), { optional: true }),
                                        query(':enter', group([
                                        animate('2s cubic-bezier(.35,0,.25,1)', style({ opacity:1 })),
                                        animateChild()
                                        ]), { optional: true })
                                    ])
                                ])
                            ]);
export const loginToAny = trigger('routerAnimations', [
                                transition('login <=> *', [
                                    query(':enter, :leave', style({ position: 'absolute', left: 0, right: 0 }), { optional: true }),
                                    query(':leave', style({ opacity:1 }), { optional: true }),
                                    query(':enter', style({ opacity:0 }), { optional: true }),
                                    group([
                                        query(':leave', group([
                                        animate('1s cubic-bezier(.35,0,.25,1)', style({ opacity: 0 })), 
                                        animateChild()
                                        ]), { optional: true }),
                                        query(':enter', group([
                                        animate('2s cubic-bezier(.35,0,.25,1)', style({ opacity:1 })),
                                        animateChild()
                                        ]), { optional: true })
                                    ])
                                ])
                            ]);

 export const xslidefadeAnimation = trigger('routerAnimations', [
                                transition('* => *', [
                                    query(':enter, :leave', style({ position: 'absolute', top: '0px', left: 0, right: 0 }), { optional: true }),
                                    query(':leave', style({ opacity:0.5, top:'0px' }), { optional: true }),
                                    query(':enter', style({  transform: 'translateX(-100%)',  opacity:0 }), { optional: true }),
                                    group([
                                        query(':leave', group([
                                        animate('1s cubic-bezier(.35,0,.25,1)', style({ opacity: 0 })), 
                                        animateChild()
                                        ]), { optional: true }),
                                        query(':enter', group([
                                        animate('1.5s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(0)', opacity:0.8 })),
                                        animateChild()
                                        ]), { optional: true })
                                    ])
                                ])
                            ]);

export const yslidefadeAnimation = trigger('routerAnimations', [
                                transition('* => *', [
                                    query(':enter, :leave', style({ position: 'absolute', bottom:'-330px', left: 0, right: 0 }), { optional: true }),
                                    query(':leave', style({ opacity:0.5,  top:'0px' }), { optional: true }),
                                    query(':enter', style({  transform: 'translateY(-100%)', opacity:0, top:'0px', bottom:'-660px', }), { optional: true }),
                                    group([
                                        query(':leave', group([
                                        animate('1s', style({ opacity: 0 })), 
                                        animateChild()
                                        ]), { optional: true }),
                                        query(':enter', group([
                                        animate('1s', style({transform: 'translateY(0)', opacity:0.8 })),
                                        animateChild()
                                        ]), { optional: true })
                                    ])
                                ])
                            ]);

export const yslideAnimation = trigger('routerAnimations', [
                                transition('* => *', [
                                    query(':enter, :leave', style({ position: 'absolute', bottom:'-330px', left: 0, right: 0 }), { optional: true }),
                                    query(':leave', style({ opacity:0.5, top:'0px', bottom:'-660px', }), { optional: true }),
                                    query(':enter', style({ opacity:0, transform: 'translateY(-100%)', top:'0px', bottom:'-660px', }), { optional: true }),
                                    group([
                                        query(':leave', group([
                                        animate('1s cubic-bezier(.35,0,.25,1)', style({transform: 'translateY(100%)', opacity: 0 })), 
                                        animateChild()
                                        ]), { optional: true }),
                                        query(':enter', group([
                                        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)', opacity:1 })),
                                        animateChild()
                                        ]), { optional: true })
                                    ])
                                ])
                            ]);


export const xslideAnimation = trigger('routerAnimations', [
                                transition('* => *', [
                                    query(':enter, :leave', style({ position: 'absolute', top:'0px', left: 0, right: 0 }), { optional: true }),
                                    query(':leave', style({ opacity:0.5, top:'0px' }), { optional: true }),
                                    query(':enter', style({ opacity:0, transform: 'translateX(-100%)' }), { optional: true }),
                                    group([
                                        query(':leave', group([
                                        animate('1s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(100%)', opacity: 0 })), 
                                        animateChild()
                                        ]), { optional: true }),
                                        query(':enter', group([
                                        animate('1.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)', opacity:0.8 })),
                                        animateChild()
                                        ]), { optional: true })
                                    ])
                                ])
                            ]);