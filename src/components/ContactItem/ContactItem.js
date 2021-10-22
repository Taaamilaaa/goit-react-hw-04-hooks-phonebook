import React from "react";
import styles from "./contactItem.module.css";
import PropTypes from 'prop-types'; // ES6


export function ContactItem({ contacts, clickOnBtn }) {
  
  return contacts.map((contact) => {
    const { id, name, number } = contact;
    return (
      <li className={styles.contactItem} key = {id} >
        <span id = 'name' className={styles.name}>{name}:</span>
        <span className={styles.number}>{number}</span>
        <button  className={styles.btn} onClick={() => clickOnBtn(id)}>❌</button>
      </li>
    );
  });
}
ContactItem.propType = {
contacts: PropTypes.obj,
clickOnBtn: PropTypes.func,
}
