import Contacts from '../contacts';
import Loading from '../loading';

export const init = Loading.withLoading('CONTACTS')(Contacts.loadAllContacts);