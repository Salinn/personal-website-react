// Component
import { connect } from 'react-redux'
import ToastsComponent from '../components/toasts';
// Redux
import {
    DELETE_TOAST,
} from '../sagas/ActionTypes'

function mapStateToProps(state) {
    return {
        toasts: state.toasts,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        deleteToast: ({ id }) => dispatch({ type: DELETE_TOAST, id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastsComponent)