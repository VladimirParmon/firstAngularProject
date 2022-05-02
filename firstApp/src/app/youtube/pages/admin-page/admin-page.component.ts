import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCustomCard } from 'src/app/redux/actions/youtube.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  isSubmissionMessageSeen: boolean = false;
  reg: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  createForm: FormGroup = this.fb.group({
    title: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    description: ['', Validators.maxLength(255)],
    thumbnail: ['', Validators.compose([Validators.pattern(this.reg), Validators.required])],
    linkVideo: ['', Validators.compose([Validators.pattern(this.reg), Validators.required])],
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit(): void {
    this.isSubmissionMessageSeen = true;
    setTimeout(() => {
      this.isSubmissionMessageSeen = false;
    }, 1500);
    this.store.dispatch(
      addCustomCard({
        info: {
          title: this.createForm.value.title,
          description: this.createForm.value.description,
          thumbnailUrl: this.createForm.value.thumbnail,
          videoUrl: this.createForm.value.linkVideo,
          date: Date.now(),
          id: Math.random() * 100 + Math.random() * 10 + Math.random() * 10,
        },
      })
    );

    this.createForm.reset();
    this.createForm.markAsPristine();
    this.createForm.markAsUntouched();
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.createForm.controls;
  }
}
