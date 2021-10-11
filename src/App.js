import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
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
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  visibleContacts = () => {
    const seach = this.state.filter.toUpperCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(seach)
    );
  };

  render() {
    const { filter } = this.state;
    const contactsList = this.visibleContacts();

    return (
      <div className="App">
        <ContactForm onSave={this.onSaveContact} />

        <ul className="">
          <h2>Contacts</h2>

          <Filter filter={filter} handlerChange={this.handlerChange} />
          {contactsList.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
