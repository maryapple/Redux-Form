import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../__data__'

import SimpleInput from './simple-input'
import SimpleButton from './simple-button'
import Checkbox from './checkbox'


class Form extends React.Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        props.init()
    }

    handleSubmit (event) {
        event.preventDefault()
        this.props.submit()
        return false
    }

    render () {
        return (
            <form name="perfect_form" autoComplete="off" onSubmit={this.handleSubmit}>
                <h1>{this.props.formTitle}</h1>
                <SimpleInput title="Фамилия" name="last_name" />
                <SimpleInput title="Имя" name="first_name" />
                <SimpleInput title="Отчество" name="middle_name" />
                <Checkbox>
                    <SimpleInput title="Фамилия" name="wife_last_name" />
                    <SimpleInput title="Имя" name="wife_first_name" />
                    <SimpleInput title="Отчество" name="wife_middle_name" />
                </Checkbox>
                <SimpleButton>
                    {'Отправить форму'}
                </SimpleButton>
            </form>
        )
        
    }
}

const mapStateToProps = (state) => ({
    initialValues: state.form.payload
})

const mapDispatchToProps = {
    init: actions.init,
    submit: actions.send
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
