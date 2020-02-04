import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Register.scss';
import { connect } from 'react-redux';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            company_name: '',
            errors: {}
        }
    }
    onChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }
    onSubmit = event => {
        event.preventDefault();
        const { email, password, name, company_name, person_name, errors } = this.state;
        if(!email && !password && !name && !company_name && !person_name) {
            return this.setState({ errors })
        }
    }
    render() {
        const { email,password, name, company_name, errors } = this.state;
        //if(!email && !password && !name && !company_name && person_name) {
            return(
                <div className='wrapper-register'>
                    <header className='header-description'>
                        <p>Зарегистрируйте аккаунт</p>
                    </header>
                    <main className='main-block'>
                        <form className='main-block__form' onSubmit={this.onSubmit}>
                            <div className='main-block__form-content'>
                                <div className='main-block__form-content__description'>Почта</div>
                                <input 
                                    onChange={this.onChange}
                                    value={email}
                                    errors={errors}
                                    id='email'
                                    type='email'
                                    className='main-block__form-content__input'
                                />
                                {/**
                                    <div className='main-block__form__content__error'></div>
                                */}
                            </div>
                            <div className='main-block__form-content'>
                                <div className='main-block__form-content__description'>Пароль</div>
                                <input 
                                    onChange={this.onChange}
                                    value={password}
                                    errors={errors}
                                    id='password'
                                    type='password'
                                    className='main-block__form-content__input'
                                />
                                {/**
                                    <div className='main-block__form__content__error'></div>
                                */}
                            </div>
                            <div className='main-block__form-content'>
                                <div className='main-block__form-content__description'>Имя</div>
                                <input 
                                    onChange={this.onChange}
                                    value={name}
                                    errors={errors}
                                    id='name'
                                    type='text'
                                    className='main-block__form-content__input'
                                />
                                {/**
                                    <div className='main-block__form__content__error'></div>
                                */}
                            </div>
                            <div className='main-block__form-content'>
                                <div className='main-block__form-content__description'>Имя компании</div>
                                <input 
                                    onChange={this.onChange}
                                    value={company_name}
                                    errors={errors}
                                    id='company_name'
                                    type='text'
                                    className='main-block__form-content__input'
                                />
                                {/**
                                    <div className='main-block__form__content__error'></div>
                                */}
                            </div>
                            <div className='main-block__form-content'>
                                <Link to='/'>
                                    <input type='submit' value='Зарегистрироваться' />
                                </Link>
                            </div>
                        </form>
                    </main>
                    <footer className='footer'>
                        <h3>Copyright 2020 &copy; CARDDEX</h3>
                        <p>Информация на сайте не является публичной офертой</p>
                    </footer>
                </div>
            )
        //}
    }
}
Register.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    register: state.register,
    errors: state.register
})
export default connect(
    mapStateToProps,
    null
)(Register)