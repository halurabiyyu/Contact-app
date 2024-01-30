import { React } from "react";
import  ContactItem from "./ContactItem.jsx";

export default function ContactList({contacts}) {
    return (
        <div className="contact-list">
          {
            contacts.map((contact) => (
              <ContactItem key={contact.id} {...contact} />
            ))
          }
        </div>
    )
}