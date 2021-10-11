import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
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

    this.setState({
      name: "",
      number: "",
    });

    this.props.onSave(newContact);
  };

  render() {
    const { name, number } = this.state;

    return (
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
    );
  }
}

export default ContactForm;
