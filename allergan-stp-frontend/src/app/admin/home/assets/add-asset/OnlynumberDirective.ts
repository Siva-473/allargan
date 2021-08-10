import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
    @HostListener('keydown', ['$event'])
    keyDownEvent(event: KeyboardEvent) {
        if (event.key.length === 1 && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    }

}