import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent implements AfterViewInit {
  @Output() inputValue: EventEmitter<string> = new EventEmitter();
  @ViewChild('sharedInput') sharedInput?: ElementRef;

  isValueOnInput: boolean = false;
  spanMessage: string = 'Presiona Enter para continuar.';

  ngAfterViewInit(): void {
    if(!this.sharedInput) return;
    this.sharedInput.nativeElement.focus();
  }

  getInputValue(event: any):void {
    this.isValueOnInput = true;
    if(event.key === 'Enter') {
      if(!this.sharedInput) return;
      this.inputValue.emit(this.sharedInput.nativeElement.value);
    }
  }
}
