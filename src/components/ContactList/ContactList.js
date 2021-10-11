function ContactList({ list }) {
  return (
    <ul className="">
      {list.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
