import { React } from "react";
import ContactItemBody  from "./ContactItemBody.jsx";
import ContactItemImage from "./ContactItemImage.jsx";

export default function ContactItem({image, name, tag }) {
    return(
        <div className="contact-item">
            <ContactItemImage image = {image} />
            <ContactItemBody name = {name} tag = {tag} />
        </div>
    )    
}