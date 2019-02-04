import connected from 'handy-thunks/lib/connected';
import Contacts from '../contacts';
import Modals from '../modal-dispatcher';

const buildMessage = ({ firstName, lastName, phone, address }) => (
  `Are you sure you want delete contact [${(
    firstName || lastName ? `${firstName} ${lastName}` : phone || address
  )}]?`
);

export const openConfirmRemoval = connected(Contacts.getContactById)(
  contact => dispatch => {
    return dispatch(
      Modals.open('confirmRemoval', {
        message: buildMessage(contact),
        onConfirm: () => dispatch(Contacts.removeContact(contact.id)),
      })
    );
  }
);
