import api from './connection';

export const getAll = () => {
  return api.get('contacts');
};

export const getById = id => {
  return api.get(`contacts/${id}`);
};

export const create = ({ firstName, lastName, phone, address }) => {
  return api.post(
    'contacts',
    { firstName, lastName, phone, address }
  );
};

export const update = ({ id, firstName, lastName, phone, address }) => {
  return api.patch(
    `contacts/${id}`,
    { firstName, lastName, phone, address }
  );
};

export const remove = ({ id }) => {
  return api.delete(`contacts/${id}`);
};
