export interface PartOfViewsAndLikesCounter {
  imgName: string;
  data: string;
}

export interface WhatFailedDuringPasswordValidation {
  lowerCaseFailed: boolean;
  upperCaseFailed: boolean;
  integerFailed: boolean;
  symbolFailed: boolean;
  lengthFailed: boolean;
}
