import PropTypes from "prop-types";

function Filter({ filter, handlerChange }) {
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={filter}
        onChange={handlerChange}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  handlerChange: PropTypes.func,
};

export default Filter;
