import { connect } from 'react-redux'
import Admin from '../components/Admin'

import { addBusiness, removeBusiness } from '../redux/action'

const mapStateToProps = (state) => {

    return {
        businesses: state.businesses
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: () => dispatch(addBusiness()),
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)