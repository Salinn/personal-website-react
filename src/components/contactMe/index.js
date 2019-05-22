import React, { memo } from 'react'
import Input from '../common/Input'
import TextBox from '../common/TextBox'

const ContactMe = (props) => {
    const {
        contactMe,
        fieldChanged,
        formSubmission
    } = props

    const handleSubmit = event => {
        event.preventDefault();
        formSubmission()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="contact-me-name"
                onChange={fieldChanged}
                label="Name:"
                name="name"
                value={contactMe.name} />
            <Input
                id="contact-me-email"
                onChange={fieldChanged}
                label="Email:"
                name="email"
                value={contactMe.email} />
            <TextBox
                id="contact-me-message"
                onChange={fieldChanged}
                label="Message:"
                name="message"
                value={contactMe.message} />
            <div>
                <button id="submit-contact-form" type="submit">Submit</button>
            </div>
        </form>
    )
}

ContactMe.defaultProps = {}

export default memo(ContactMe)