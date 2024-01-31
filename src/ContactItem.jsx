import { React } from "react";
import ContactItemBody  from "./ContactItemBody.jsx";
import ContactItemImage from "./ContactItemImage.jsx";
import DeleteButton from "./DeleteButton";

export default function ContactItem({image, name, tag, id, onDelete }) {
    return(
        <div className="contact-item">
            <ContactItemImage image = {image} />
            <ContactItemBody name = {name} tag = {tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )    
}