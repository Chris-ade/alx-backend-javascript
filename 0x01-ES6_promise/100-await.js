/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser(fileName) {
  try {
    const photo = await uploadPhoto(fileName);
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
