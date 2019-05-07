import React, { memo } from 'react'
import Input from '../common/Input'
import TextBox from '../common/TextBox'

const ContactMe = (props) => {
    const {
        name,
        email,
        message,
        fieldChanged,
        submittedForm
    } = props

    const handleSubmit = event => {
        event.preventDefault();
        console.log('here')
        submittedForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="contact-me-name"
                onChange={fieldChanged}
                label="Name:"
                name="name"
                value={name} />
            <Input
                id="contact-me-email"
                onChange={fieldChanged}
                label="Email:"
                name="email"
                value={email} />
            <TextBox
                id="contact-me-message"
                onChange={fieldChanged}
                label="Message:"
                name="message"
                value={message} />
            <div>
                <button id="submit-contact-form" type="submit">Submit</button>
            </div>
        </form>
    )
}

ContactMe.defaultProps = {
    fieldChanged: () => console.log("You didn't pass a fieldChanged function"),
    submittedForm: () => console.log("You didn't pass a submittedForm function")
}

export default memo(ContactMe)