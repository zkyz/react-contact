import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import FloatingButton from './components/FloatingButton'
import ContactListContainer from './containers/ContactListContainer'
import FavoriteListContainer from './containers/FavoriteListContainer'
import Input from './components/Input'
import {connect} from 'react-redux'
import ViewSelectorContainer from './containers/ViewSelectorContainer'

const App = ({view, search, onSearch}) => (
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

		{/*<ContactModal
		 {...modal}
		 onHide={modalHandler.hide}
		 onChange={modalHandler.change}
		 onAction={modalHandler.action[modal.mode]}
		 onRemove={modalHandler.action.remove}
		 />
		 <Dimmed visible={modal.visible}/>*/}
		<FloatingButton onClick={ () => console.log('click') }/>
	</div>
)

const mapStateToProps = state => ({
	view:   state.handles.get('view'),
	search: {
		keyword: state.handles.getIn(['search', 'keyword'])
	}
})

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer