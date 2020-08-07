import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '@app/services/user/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy  {
  @Input()
  id: string;
  signInForm: FormGroup;
  // userService: UserService;
  private destroy$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      telephone: [null, [Validators.required, Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)]],
      login: [null, [Validators.required]]
    });
  }

  onSignInSubmit(event: Event) {
    event.preventDefault();

    if(!this.signInForm.valid) {
      return;
    }
     this.userService.user.next({login: this.signInForm.value.login})
     this.userService.name = this.signInForm.value.login;
     this.userService.telephone = this.signInForm.value.telephone;

    console.log(this.signInForm.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
