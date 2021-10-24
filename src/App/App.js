import {useState, useEffect} from "react";
import "./App.css";
import { Form } from "../components/Form/Form";
import { ContactList } from "../components/ContactList/ContactList";
import { v4 as uuid } from "uuid";
import { Filter } from "../components/Filter/Filter";



function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },]);

  const formSubmitHandle = (data) => {
    const { name, number } = data;
    const newContact = {
      id: uuid(),
      name: name,
      number: number,
    };
    const renderedNames = contacts.find(
      (contact) => contact.name.toUpperCase() === newContact.name.toUpperCase()
    );
    if (renderedNames) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }
    setContacts(prevState => [newContact, ...prevState]);
  };
  
  const filterChange = (event) => setFilter(event.currentTarget.value);
  
  const contactsFilter = () => {
    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  
  const onBtnDelClick = (id) => {
    console.log(id);
    setContacts(state => state.filter((contact) => contact.id !== id,
    ));
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  
  useEffect(() => {
  const contactsJson = JSON.stringify(contacts);
  if (contactsJson) {
    localStorage.setItem('contacts', contactsJson);
  }
}, [contacts]);

  return (
      <div className="phonebook">
        <h2 className="title">Phonebook</h2>
        <Form onSubmit={formSubmitHandle} />
        <h2 className="title">Contacts</h2>
       <Filter value={filter} onChange={filterChange} />
        {contacts.length > 0 
        ? (<ContactList contacts={contactsFilter()} clickOnBtn={onBtnDelClick}/>)
        : (<p className= "notification">Please add your contacts.</p>)}
      </div>
    );
};
export default App;
