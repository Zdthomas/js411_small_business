import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import { addBusiness } from '../redux/action'

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business))
    }
}

export default connect(null, mapDispatchToProps)(AddBusiness)