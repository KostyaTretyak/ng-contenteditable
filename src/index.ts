import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  forwardRef,
  Input
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[contenteditable]',
  providers:
  [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ContenteditableDirective), multi: true}
  ]
})
export class ContenteditableDirective implements ControlValueAccessor
{
  @Input() propValueAccesor: string = 'textContent';

  private onChange: (value: string) => void;
  private onTouched: () => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer2){}

  @HostListener('input')
  callOnChange()
  {
    if(typeof this.onChange == 'function')
      this.onChange(this.elementRef.nativeElement[this.propValueAccesor]);
  }

  @HostListener('blur')
  callOnTouched()
  {
    if(typeof this.onTouched == 'function')
      this.onTouched();
  }

  /**
   * Writes a new value to the element.
   * This method will be called by the forms API to write
   * to the view when programmatic (model -> view) changes are requested.
   * 
   * See: [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor#members)
   */
  writeValue(value: any): void
  {
    this.renderer.setProperty(this.elementRef.nativeElement, this.propValueAccesor, value);
  }

  /**
   * Registers a callback function that should be called when
   * the control's value changes in the UI.
   * 
   * This is called by the forms API on initialization so it can update
   * the form model when values propagate from the view (view -> model).
   * 
   * If you are implementing `registerOnChange` in your own value accessor,
   * you will typically want to save the given function so your class can call it at the appropriate time.
   */
  registerOnChange(fn: any): void
  {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * This is called by the forms API on initialization so it can update the form model on blur.
   * 
   * If you are implementing registerOnTouched in your own value accessor, you will typically want
   * to save the given function so your class can call it when the control should be considered blurred (a.k.a. "touched").
   */
  registerOnTouched(fn: any): void
  {
    this.onTouched = fn;
  }

  /**
   * This function is called by the forms API when the control status changes to or from "DISABLED".
   * Depending on the value, it should enable or disable the appropriate DOM element.
   */
  setDisabledState(isDisabled: boolean): void
  {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }
}
