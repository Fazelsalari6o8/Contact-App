import styles from "./Contact.module.css";

function Contact({
  data: { id, name, lastName, email, phone },
  deleteHandler,
  contactId,
  setShowDetails,
}) {
  return (
    <div className={id === contactId ? styles.container : styles.nonSelected}>
      <div className={styles.details}>
        {id === contactId && (
          <>
            <p>
              <span>👤</span>
              {name} {lastName}
            </p>
            <p>
              <span>📪</span>
              {email}
            </p>
            <p>
              <span>📞</span>
              {phone}
            </p>
            <div>
              <button onClick={() => deleteHandler(id)}>🗑️</button>
              <button onClick={() => setShowDetails(false)}>×</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
