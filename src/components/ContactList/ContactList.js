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

export default ContactList;
