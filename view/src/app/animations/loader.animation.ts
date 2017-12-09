import { trigger, animate, stagger, state, group, keyframes, animateChild, transition, style, query } from '@angular/animations';



export const pageLoader = trigger('pageLoader',[
                                    state('pageLoaderstart',style({ transform:'translateX(-100%)', opacity: '1' })),
                                    state('pageLoaderstart1',style({ transform:'translateX(-80%)' })),
                                    state('pageLoaderstart2',style({ transform:'translateX(-60%)' })),
                                    state('pageLoaderstart3',style({ transform:'translateX(-40%)' })),
                                    state('pageLoaderstart4',style({ transform:'translateX(-20%)' })),
                                    state('pageLoaderstart5',style({ transform:'translateX(-5%)' })),
                                    state('pageLoaderend',style({ transform:'translateX(0%)' })),
                                    state('pageLoaderend',style({ display:'none'})),
                                    transition('pageLoaderstart => pageLoaderstart1',animate(1000)),
                                    transition('pageLoaderstart1 => pageLoaderstart2',animate(1000)),
                                    transition('pageLoaderstart2 => pageLoaderstart3',animate(1000)),
                                    transition('pageLoaderstart3 => pageLoaderstart4',animate(1000)),
                                    transition('pageLoaderstart4 => pageLoaderstart5',animate(1000)),
                                    transition('* => pageLoaderend',animate(1000))
                                ]);
 export const pageIdendity = trigger('pageIdendity',[
                                    state('pageIdenditystart',style({ transform:'translateX(100%)' })),
                                    state('pageIdendityend',style({ transform:'translateX(0%)' })),
                                    transition('pageIdenditystart => pageIdendityend',animate(1000))
                                ]);

export const pageContent = trigger('pageContent',[
                                    state('pageContentstart',style({opacity: '0', transform: 'scale(0.0)' })),
                                    state('pageContentend',style({ opacity: '1', transform: 'scale(1.0)' })),
                                    transition('pageContentstart => pageContentend',animate(1000))
                                ]);

