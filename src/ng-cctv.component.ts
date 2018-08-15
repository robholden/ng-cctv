import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { elementEnd } from '../node_modules/@angular/core/src/render3/instructions';
@Component({
    selector: 'ng-cctv',
    templateUrl: './ng-cctv.component.html',
    styleUrls: ['./ng-cctv.component.scss']
})

export class NgCCTVComponent implements OnInit, OnDestroy {
    @Input() idleTime: number = 3;
    @Input() selector: string = 'body';
    @Input() offset: number;

    element: any;
    inactivity = 0;
    on = true;
    angle = 0;

    constructor() {
    }

    get usingBody() {
        return this.selector === 'body';
    }
    
    get eventElement() {
        return this.usingBody ? window : this.element;
    }

    ngOnInit() {
        setInterval(() => this.timerIncrement(), 1000);

        this.element = document.querySelector(this.selector);
        if (! this.element) {
            this.selector = 'body';
            this.element = document.querySelector('body');
        }

        this.eventElement.addEventListener('scroll', () => this.scroll(), true);
        this.eventElement.addEventListener('mousemove', () => this.mouseMove(), true);
    }

    ngOnDestroy() {
        this.eventElement.removeEventListener('scroll', () => this.scroll(), true);
        this.eventElement.removeEventListener('mousemove', () => this.mouseMove(), true);
    }

    mouseMove() {
        this.inactivity = 0;
    }

    scroll() {
        this.follow();
        this.inactivity = 0;
    }

    timerIncrement() {
        if (this.inactivity > this.idleTime) {
            this.on = false;
        }

        if (this.inactivity === 0) {
            this.on = true;
        }

        this.inactivity += 1;
    }

    follow() {
        // Get current scroll position and height of the scroll container
        const posY = this.usingBody ? window.pageYOffset : this.element.scrollTop;
        const height = (this.element.scrollHeight + this.element.offsetTop) - window.innerHeight;
        
        // Calculate new angle by the % they've scrolled (max angle is 55)
        this.angle = 55 * (posY / height);
    }
}