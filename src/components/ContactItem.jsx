import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastName },
  setShowDetails,
  setContactId,
}) {
  const showContactDetails = (id) => {
    setShowDetails(true);
    setContactId((contactId) => (contactId = id));
  };
  return (
    <li className={styles.item} onClick={() => showContactDetails(id)}>
      <p>
        <span>👤</span> {name} {lastName}
      </p>
      {/* <p>
        <span>📪</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑️</button> */}
    </li>
  );
}

export default ContactItem;
