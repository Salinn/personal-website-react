import React, { memo } from 'react'
import Toast from './Toast'

const ToastContainer = (props) => {
    const {
        toasts,
        removeToast,
    } = props

    const generatedToasts = toasts.map(toast => {
        return <Toast key={toast.id} {...toast} deleteToast={removeToast} />
    })

    return (
        <div id="toastContainer">
            {generatedToasts}
        </div>
    )
}

ToastContainer.defaultProps = {}

export default memo(ToastContainer)