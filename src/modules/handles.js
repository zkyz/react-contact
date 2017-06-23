import {createAction, handleActions} from 'redux-actions'
import {fromJS, Map} from 'immutable'

const actionNames = {
	MODAL:       {
		SHOW:  'contacts/MODAL_SHOW',
		HIDE:  'contacts/MODAL_HIDE',
		INPUT: 'contacts/MODAL_INPUT'
	},
	SEARCH:      'contacts/SEARCH',
	CHANGE_VIEW: 'contacts/CHANGE_VIEW'
}

export const actions = {
	modal:      {
		show:  createAction(actionNames.MODAL.SHOW),
		hide:  createAction(actionNames.MODAL.HIDE),
		input: createAction(actionNames.MODAL.INPUT)
	},
	search:     createAction(actionNames.SEARCH),
	changeView: createAction(actionNames.CHANGE_VIEW)
}

export default handleActions({
		[actionNames.MODAL.SHOW]:  (state, action) => {
			return state.mergeDeep({
				window: {
					visible: true,
					data:    action.payload || Map({})
				}
			})
		},
		[actionNames.MODAL.HIDE]:  state => {
			return state.mergeDeep({
				window: {
					visible: false,
					data:    Map({})
				}
			})
		},
		[actionNames.MODAL.INPUT]: state => {
			console.log(state.toJS())
			return state.mergeDeepIn(['window', state.name], state.value)
		},
		[actionNames.SEARCH]:      (state, action) => {
			return state.updateIn(['search', 'keyword'], keyword => action.payload)
		},
		[actionNames.CHANGE_VIEW]: (state, action) => {
			return state.update('view', view => action.payload)
		}
	},
	fromJS({
		view:   'list',
		search: {
			keyword: ''
		},
		window: {
			visible: false,
			data:    {}
		}
	})
)
