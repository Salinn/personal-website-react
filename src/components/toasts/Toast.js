import React, { memo } from 'react'

const Toast = (props) => {
    const {
        id,
        message,
        deleteToast
    } = props

    const handleOnClick = event => {
        event.preventDefault();
        deleteToast({ id })
    }

    return (
        <div id={`toast-${id}`}>
            {message}
            <button onClick={handleOnClick} type="button">close</button>
        </div>
    )
}

Toast.defaultProps = {
    id: 'no-id-set',
    message: 'no message set',
    deleteToast: () => console.log("You didn't pass a deleteToast function"),
}

export default memo(Toast)