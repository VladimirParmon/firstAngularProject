import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { storeAPIVideos, storeCustomCards } from 'src/app/redux/actions/youtube.actions';

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

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submitted!');
  }

  storageTesting() {
    this.store.dispatch(storeCustomCards({ info: 'some string' }));
  }

  storageTestingAPI() {
    this.store.dispatch(storeAPIVideos({ infoAPI: 'some yt string' }));
  }

  get forms() {
    return this.createForm.controls;
  }
}
