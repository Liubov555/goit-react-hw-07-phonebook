import PropTypes from "prop-types";
import { List, Item, Text, Button } from "./ContactList.style";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "redux/operations";

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    return (
        <List>
            {contacts.map(({ id, name, phone }) => {
                return (
                    <Item key={id}>
                        <Text> {name}: {phone} </Text>
                        <Button
                            type="button"
                            onClick={() => dispatch(deleteContact(id))}>
                            Delete
                        </Button>
                    </Item>
                );
            }
            )}
        </List>
    );
}

ContactList.prototypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        })),
    deleteContact: PropTypes.func,
}