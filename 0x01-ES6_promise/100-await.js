#!/usr/bin/env node

/* Script that uses the async and wait functions */

import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser () {
  let photo = await uploadPhoto();
  if (!photo) {
    photo = null;
  }
  let user = await createUser();
  if (!user) {
    user = null;
  }

  return {
    photo: photo,
    user: user
  };
}
