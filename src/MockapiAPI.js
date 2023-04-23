const URL = 'https://6443d159466f7c2b4b5aeb2d.mockapi.io/users';
export const recordsPerPage = 3;
export const getUsers = (page) => {
  return fetch(`${URL}?&page=${page}&limit=${recordsPerPage}`);
};