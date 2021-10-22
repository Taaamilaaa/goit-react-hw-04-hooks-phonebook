import { ContactItem } from "../ContactItem/ContactItem";
import styles from "./contactList.module.css";
import PropTypes from "prop-types"; // ES6

export function ContactList({ contacts, clickOnBtn }) {
  return (
    <>
      <ul className={styles.list}>
        <ContactItem contacts={contacts} clickOnBtn={clickOnBtn} key={contacts.id} />
      </ul>
    </>
  );
}
ContactList.prototype = {
contacts: PropTypes.obj,
clickOnBtn: PropTypes.func,
}