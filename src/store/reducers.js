import Contacts from '../contacts';
import Loading from '../loading';
import Modals from '../modal-dispatcher';
import ContactModal from '../ContactModal';

export default {
  ...Contacts.reducers,
  ...Loading.reducers,
  ...Modals.reducers,
  ...ContactModal.reducers,
};
