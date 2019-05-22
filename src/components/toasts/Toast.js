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
            <p>{message}</p>
            <button onClick={handleOnClick} type="button">close</button>
        </div>
    )
}

Toast.defaultProps = {
    id: 'no-id-set',
    message: 'no message set',
}

export default memo(Toast)