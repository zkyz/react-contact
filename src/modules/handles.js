import {createActions, handleActions} from 'redux-actions'
import {fromJS, Map} from 'immutable'

const MODAL = {
	SHOW: 'contacts/MODAL_SHOW',
	HIDE: 'contacts/MODAL_HIDE'
}
const SEARCH = 'contacts/SEARCH'
const CHANGE_VIEW = 'contacts/CHANGE_VIEW'

export const actions = {
	modal:      {
		show: createActions(MODAL.SHOW),
		hide: createActions(MODAL.HIDE)
	},
	search:     createActions(SEARCH),
	changeView: createActions(CHANGE_VIEW)
}

export default handleActions({
		[MODAL.SHOW]:  (state, action) => {
			state.updateIn(['window', 'visible'], true)
			state.updateIn(['window', 'data'], action.payload || Map({}))
		},
		[MODAL.HIDE]:  state => {
			state.updateIn(['window', 'visible'], false)
			state.updateIn(['window', 'data'], Map({}))
		},
		[SEARCH]:      (state, action) => {
			state.updateIn(['search', 'keyword'], action.payload)
		},
		[CHANGE_VIEW]: (state, action) => {
			state.update('view', action.payload)
		}
	},
	fromJS({
		view:   'favorite',
		search: {
			keyword: ''
		},
		window: {
			visible: false,
			data:    {}
		}
	})
)
