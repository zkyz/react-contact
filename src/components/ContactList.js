import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {transitions} from '../lib/style-utils'

const Wrapper = styled.div`
    margin-top: 1rem;

    .contact-enter {
        animation: ${transitions.stretchOut} .15s linear;
        animation-fill-mode: forwards;
    }

    .contact-leave {
        animation: ${transitions.shrinkIn} .15s linear;
        animation-fill-mode: forwards;
    }
`

class ContactList extends Component {

	static propTypes = {
		contacts:         PropTypes.arrayOf(PropTypes.object),
		search:           PropTypes.string, // 검색 키워드
		onToggleFavorite: PropTypes.func, // 즐겨찾기 토글
		onOpenModify:     PropTypes.func // 수정 모달 띄우기
	}

	render() {
		const {contacts, onOpenModify, search, onToggleFavorite} = this.props

		const contactList = contacts
			.filter(contact => !search || contact.name.indexOf(search))
			.sort((a, b) => a.name > b.name ? 1 : -1)
			.map(
				contact => {
					return (
						<ContactItem
							key={contact.id}
							contact={contact}
							onOpenModify={onOpenModify}
							onToggleFavorite={onToggleFavorite}
						/>
					)
				}
			)


		return (
			<Wrapper>
				<CSSTransitionGroup
					transitionName="contact"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					{contactList}
				</CSSTransitionGroup>
			</Wrapper>
		)
	}
}

export default ContactList