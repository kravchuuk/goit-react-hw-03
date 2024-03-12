import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};
