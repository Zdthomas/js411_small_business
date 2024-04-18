import { connect } from 'react-redux'
import Business from '../components/Business'

const mapStateToProps = (state) => {
    console.log(state.businesses);

    return {
        businesses: state.businesses
        
    }
}

export default connect(mapStateToProps)(Business)