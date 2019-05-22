// Redux
import { connect } from 'react-redux'
import { removeToast } from '../actions/Toasts'
// Component
import ToastsComponent from '../components/toasts';

export function mapStateToProps(state) {
    return {
        toasts: state.toasts,
    };
}

const mapDispatchToProps = {
    removeToast
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastsComponent)