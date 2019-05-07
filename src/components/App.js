import React from 'react'
import AppRoutes from '../routes'
import ToastContainer from '../containers/ToastsContainer'

const App = () => {
    return (
        <div>
            <AppRoutes />
            <ToastContainer />
        </div>
    )
}

export default React.memo(App)