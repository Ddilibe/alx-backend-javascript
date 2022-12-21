#!/usr/bin/env node

function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

module.exports = {
	uploadPhoto : uploadPhoto,
	createUser: createUser,
}