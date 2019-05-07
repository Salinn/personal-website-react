import React, { memo } from 'react'
import Toast from './Toast'

const ToastContainer = (props) => {
    const {
        toasts,
        deleteToast,
    } = props

    const generatedToasts = toasts.map(toast => <Toast {...toast} deleteToast={deleteToast} />)

    return (
        <div id='toastContainer'>
            {generatedToasts}
        </div>
    )
}

ToastContainer.defaultProps = {
    toasts: [],
    submittedForm: () => console.log("You didn't pass a deleteToast function")
}

export default memo(ToastContainer)