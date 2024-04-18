import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

import { removeBusiness } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)