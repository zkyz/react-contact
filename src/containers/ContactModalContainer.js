import {connect} from 'react-redux'
import ContactModal from '../components/ContactModal'
import {actions} from '../modules/handles'

const mapStateToProps = state => ({
	visible: state.handles.getIn(['window', 'visible']),
	data: state.handles.getIn(['window', 'data']).toJS()
})

const mapDispatchToProps = dispatch => ({
	onInput: e => {
		const {name, value} = e.target

		const values = {
			name,
			value
		}

		dispatch(actions.modal.input(values))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal)