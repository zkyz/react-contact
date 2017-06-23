import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import FloatingButton from './components/FloatingButton'
import ContactListContainer from './containers/ContactListContainer'
import FavoriteListContainer from './containers/FavoriteListContainer'
import Input from './components/Input'
import {connect} from 'react-redux'
import ViewSelectorContainer from './containers/ViewSelectorContainer'
import {actions} from './modules/handles'
import ContactModalContainer from './containers/ContactModalContainer'

const App = ({view, search, onSearch, onAdd}) => (
	<div>
		<Header/>
		<ViewSelectorContainer />
		<Container visible={view === 'favorite'}>
			<FavoriteListContainer />
		</Container>
		<Container visible={view === 'list'}>
			<Input onChange={onSearch} value={search.keyword} placeholder="검색"/>
			<ContactListContainer />
		</Container>

		<ContactModalContainer />

		<FloatingButton onClick={onAdd}/>
	</div>
)

const mapStateToProps = state => ({
	view:   state.handles.get('view'),
	search: {
		keyword: state.handles.getIn(['search', 'keyword'])
	}
})

const mapDispatchToProps = (dispatch, ownProps) => {
	return ({
		onAdd:    () => {
			dispatch(actions.modal.show())
		},
		onSearch: e => {
			dispatch(actions.search(e.target.value))
		}
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(App)