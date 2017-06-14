import ContactList from '../components/ContactList'
import {connect} from 'react-redux'
import {actions} from '../modules/contacts'

const mapStateToProps = state => ({
	contacts: state.contacts.toJS(),
	search:   state.handles.getIn(['search', 'keyword'])
})

const mapDispatchToProps = dispatch => ({
	onOpenModify:     contact => dispatch(
		actions.show(contact)
	),
	onToggleFavorite: (id, favorite) => dispatch(
		actions.star({
			id,
			favorite: !favorite
		})
	)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)