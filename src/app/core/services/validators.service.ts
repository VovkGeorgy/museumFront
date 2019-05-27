import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {
  }

  get numbers() {
    return (formControl: FormControl) => {
      return Validators.pattern('^[0-9]*$')(formControl);
    };
  }
}
