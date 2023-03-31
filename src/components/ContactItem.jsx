import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsThunks';

import { Button } from '@mui/material';

const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-item">
      {name}: {number}
      <Button
        variant="outlined"
        size="small"
        type="button"
        sx={{ ml: 2 }}
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: ContactPropType,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
