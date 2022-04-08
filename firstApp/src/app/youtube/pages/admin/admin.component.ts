import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCustomCard } from '../../../redux/actions/youtube.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  createForm = this.fb.group({
    title: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    description: ['', Validators.maxLength(255)],
    img: ['', Validators.compose([Validators.pattern(this.reg), Validators.required])],
    linkVideo: ['', Validators.compose([Validators.pattern(this.reg), Validators.required])],
  });

  titleString: string = '';
  descriptionString: string = '';
  imgLinkString: string = '';
  videoLinkString: string = '';

  isNotificationSeen = false;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isNotificationSeen = true;
    setTimeout(() => {
      this.isNotificationSeen = false;
    }, 1000);

    this.store.dispatch(
      addCustomCard({
        info: {
          title: this.titleString,
          description: this.descriptionString,
          img: this.imgLinkString,
          video: this.videoLinkString,
        },
      })
    );

    this.createForm.reset();
    this.createForm.markAsPristine();
    this.createForm.markAsUntouched();
  }

  get forms() {
    return this.createForm.controls;
  }
}
