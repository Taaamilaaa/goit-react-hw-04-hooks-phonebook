import React from "react";
import { v4 as uuid } from "uuid";
import styles from "./form.module.css";

export class Form extends React.Component {
  nameId = uuid();
  nameInputId = uuid();
  numberInputId = uuid();
  contactId = uuid();

  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {    
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={this.state.name}
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title=""
          required
          onChange={this.handleChange}
        />
        <label className={styles.label} htmlFor={this.numberInputId}>
          {" "}
          Number
        </label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={this.state.number}
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title=""
          required
          onChange={this.handleChange}
        />
        <button className={styles.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
