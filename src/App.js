import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
// import PropTypes from 'prop-types'

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handlerChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSaveContact = (newContact) => {
    const { contacts } = this.state;
    const newContactName = newContact.name.toUpperCase();

    const knownContact = contacts.find(
      ({ name }) => name.toUpperCase() === newContactName
    );

    if (knownContact) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  visibleContacts = () => {
    const search = this.state.filter.toUpperCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(search)
    );
  };

  render() {
    const { filter } = this.state;
    const contactsList = this.visibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.onSaveContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} handlerChange={this.handlerChange} />
        <ContactList list={contactsList} />
      </div>
    );
  }
}

export default App;
