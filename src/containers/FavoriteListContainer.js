import FavoriteList from '../components/FavoriteList'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
		contacts: state.contacts.toJS()
})

export default connect(mapStateToProps)(FavoriteList)