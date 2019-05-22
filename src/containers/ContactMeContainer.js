// Redux
import { connect } from 'react-redux'
import { fieldChanged, formSubmission } from '../actions/ContactMe'
// Component
import ContactMe from '../components/contactMe';


export function mapStateToProps(state) {
    return {
        contactMe: state.contactMe,
    };
}

const mapDispatchToProps = {
    fieldChanged,
    formSubmission
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)