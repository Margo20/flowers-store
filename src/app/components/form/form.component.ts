import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  id: string;
  signInForm: FormGroup;
  // allEvents = allEvents;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      // login: [null, [Validators.required()]],
      // pass: [null,[Validators.minLength(5)],[Validators.maxLength(15)]],
      // email: [null,[Validators.email()]],

    });
  }

  onSignInSubmit(event: Event) {
    event.preventDefault();

    if(!this.signInForm.valid) {
      return;
    }
    // this.userService.user.next({login: this.signInForm.value.login})

    console.log(this.signInForm.value);
  }
}
