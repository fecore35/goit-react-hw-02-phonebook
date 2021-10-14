import PropTypes from "prop-types";

function ContactList({ list, deleteContact }) {
  return (
    <ul className="">
      {list.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" data-id={id} onClick={deleteContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};

export default ContactList;
