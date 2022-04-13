import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  isSubmissionMessageSeen: boolean = false;
  reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  createForm = this.fb.group({
    title: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    description: ['', Validators.maxLength(255)],
    thumbnail: ['', Validators.compose([Validators.pattern(this.reg), Validators.required])],
    linkVideo: ['', Validators.compose([Validators.pattern(this.reg), Validators.required])],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.isSubmissionMessageSeen = true;
    setTimeout(() => {
      this.isSubmissionMessageSeen = false;
    }, 1500);
    //TODO: add cards to RXJS store
  }

  get forms() {
    return this.createForm.controls;
  }
}
