import {createAction, handleActions} from 'redux-actions'
import {fromJS, Map} from 'immutable'
import * as shortid from 'shortid'

const SAVE = 'contacts/SAVE'
const DROP = 'contacts/REMOVE'
const STAR = 'contacts/FAVORITE'

export const actions = {
	save: createAction(SAVE),
	drop: createAction(DROP),
	star: createAction(STAR),
}

export default handleActions({
		[SAVE]: (state, actions) => state.contacts.push(
			Map({
				id:       actions.payload.id || shortid.generate(),
				name:     actions.payload.name,
				phone:    actions.payload.phone,
				color:    actions.payload.color,
				favorite: actions.payload.favorite
			})
		),
		[DROP]: (state, action) => state.contacts.delete(
			state.contacts.findIndex(c => c.get('id') === action.payload)
		),
		[STAR]: (state, action) => {
			const i = state.contacts.findIndex(c => c.get('id') === action.payload.id)
			return state.contacts.updateIn([i, 'favorite'], !action.payload.favorite)
		}
	},
	fromJS([
		{
			'id':       'SyKw5cyAl',
			'name':     '김민준',
			'phone':    '010-0000-0000',
			'color':    '#40c057',
			'favorite': true
		},
		{
			'id':       'r1s_9c10l',
			'name':     '아벳',
			'phone':    '010-0000-0001',
			'color':    '#12b886',
			'favorite': true
		},
		{
			'id':       'BJcFqc10l',
			'name':     '베티',
			'phone':    '010-0000-0002',
			'color':    '#fd7e14',
			'favorite': false
		},
		{
			'id':       'BJUcqqk0l',
			'name':     '찰리',
			'phone':    '010-0000-0003',
			'color':    '#15aabf',
			'favorite': false
		},
		{
			'id':       'rJHoq91Cl',
			'name':     '데이비드리',
			'phone':    '010-0000-0004',
			'color':    '#e64980',
			'favorite': false
		}
	])
)