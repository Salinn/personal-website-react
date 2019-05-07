// Component
import { connect } from 'react-redux'
import ContactMe from '../components/contactMe';
// Redux
import {
    CONTACT_ME_FIELD_CHANGED,
    CONTACT_ME_FIELD_SUBMITTED
} from '../sagas/ActionTypes'

function mapStateToProps(state) {
    return {
        ...state.ContactMe,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fieldChanged: ({ name, value }) => dispatch({ type: CONTACT_ME_FIELD_CHANGED, name, value }),
        submittedForm: (event) => dispatch({ type: CONTACT_ME_FIELD_SUBMITTED, event })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)