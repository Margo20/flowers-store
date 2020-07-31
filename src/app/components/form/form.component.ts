import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators} from "@angular/forms";
import { UserService } from '@app/services/user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {
  @Input()
  id: string;
  signInForm: FormGroup;
  userService: UserService;
  // allEvents = allEvents;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe(
      res => console.log(res)
    );

    this.signInForm = this.formBuilder.group({
       login: [null, [
         Validators.required,
         // Validators.pattern()
       ]],
      pass: [null,[
        Validators.minLength(5),
        Validators.maxLength(15)
      ]],
       email: [null,[
         Validators.email
       ]],

    });
  }

  onSignInSubmit(event: Event) {
    event.preventDefault();

    if(!this.signInForm.valid) {
      return;
    }
     this.userService.user.next({login: this.signInForm.value.login})

    console.log(this.signInForm.value);
  }
}
