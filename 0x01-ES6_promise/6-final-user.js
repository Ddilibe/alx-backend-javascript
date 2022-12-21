import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup (firstName, lastName, fileName) {
  return Promise
    .any([signUpUser(firstname, lastName), uploadPhoto(filename)])
    .then((value) => {
      return value;
    });
}
