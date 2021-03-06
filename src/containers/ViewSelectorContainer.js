import {connect} from 'react-redux'
import {actions} from '../modules/handles'
import ViewSelector from '../components/ViewSelector'

const mapStateToProps = state => ({
	selected: state.handles.get('view')
})

const mapDispatchToProps = dispatch => ({
	onSelect: name => dispatch(actions.changeView(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewSelector)
