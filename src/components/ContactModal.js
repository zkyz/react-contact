import React from 'react'
import styled from 'styled-components'
import oc from 'open-color'
import Modal from './Modal'
import Thumbnail from './Thumbnail'
import Input from './Input'

import RemoveIcon from 'react-icons/lib/md/remove-circle'

import PropTypes from 'prop-types'


const ThumbnailWrapper = styled.div`
    /* 레이아웃 */
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;

    /* 색상 */
    background: white;
`

const Form = styled.div`
    /* 레이아웃 */
    padding: 1rem;

    /* 색상 */
    background: ${oc.gray[0]};
`

const ButtonsWrapper = styled.div`
    /* 레이아웃 */
    display: flex;
`

const Button = styled.div`
    /* 레이아웃 */
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1;
    display: inline-block;
    
    /* 기타 */
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    transition: all .3s;

    /* 색상 */
    color: white;
    background: ${props => oc[props.color][7]};

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${props => oc[props.color][6]};
    }

    /* 클릭 될 때 */
    &:active {
        background: ${props => oc[props.color][8]};
    }
`

Button.propType = {
	color: PropTypes.string
}

const RemoveButton = styled.div`
    /* 레이아웃 */
    position: absolute;
    right: 1rem;
    top: 1rem;

    /* 색상 */
    color: ${oc.gray[6]};

    /* 기타 */
    cursor: pointer;
    font-size: 2rem;

    /* 마우스 커서 위에 있을 때 */
    &:hover {
        color: ${oc.red[6]};
    }
    /* 마우스 커서 클릭 시 */
    &:active {
        color: ${oc.red[7]}
    }

    ${props => !props.visible && 'display: none;'}
`

RemoveButton.propTypes = {
	visible: PropTypes.bool
}

const ContactModal = ({visible, data, onInput, onAction, onHide, onRemove}) => (
	<Modal visible={visible} onHide={onHide}>
		<ThumbnailWrapper>
			<RemoveButton onClick={onRemove}><RemoveIcon/></RemoveButton>
			<Thumbnail size="8rem" color={data.color}/>
		</ThumbnailWrapper>
		<Form>
			<Input
				name="name"
				placeholder="이름"
				value={data.name}
				onChange={onInput}
			/>
			<Input
				name="phone"
				placeholder="전화번호"
				value={data.phone}
				onChange={onInput}
			/>
		</Form>
		<ButtonsWrapper>
			<Button color="teal" onClick={onAction}>저장</Button>
			<Button onClick={onHide} color="gray">취소</Button>
		</ButtonsWrapper>
	</Modal>
)

export default ContactModal