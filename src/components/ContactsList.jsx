import ContactItem from "./ContactItem";
import Contact from "./Contact";

import styles from "./ContactsList.module.css";
import { useState } from "react";

function ContactsList({ contacts, deleteHandler }) {
  const [showDetails, setShowDetails] = useState(false);
  const [contactId, setContactId] = useState("");
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
              setContactId={setContactId}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet!</p>
      )}
      {showDetails &&
        contacts.map((contact) => (
          <Contact
            data={contact}
            deleteHandler={deleteHandler}
            contactId={contactId}
            setShowDetails={setShowDetails}
          />
        ))}
    </div>
  );
}

export default ContactsList;
