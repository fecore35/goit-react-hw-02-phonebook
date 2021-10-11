import React, { Component } from "react";
// import PropTypes from 'prop-types'
//
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handlerChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSaveContact = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));

    this.setState({
      name: "",
      number: "",
    });
  };

  visibleContacts = () => {
    const seach = this.state.filter.toUpperCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(seach)
    );
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const contactsList = this.visibleContacts();
    console.log(contactsList);
    return (
      <div className="App">
        <form onSubmit={this.onSaveContact}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handlerChange}
            />
          </label>

          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.handlerChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <ul className="">
          <h2>Contacts</h2>

          <p>Find contact by name</p>
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={filter}
            onChange={this.handlerChange}
          />

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
