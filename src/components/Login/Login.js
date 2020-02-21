import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: 'неверная почта',
        password: 'неверный пароль'
      }
    };
  }

  /** ************* CHANGE INPUT ************* */
  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  /** ************* SUBMIT FORM ************* */
  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if(!email) {
        this.setState({
            errors: this.state.errors.email
        })
    } else if(!password) {
        this.setState({
            errors: this.state.errors.password
        })
    } else if(!email && !password) {
        this.setState({
            errors: {
                email: "неверная почта",
                password: "неверный пароль"  
            }
        })
    } else {
        this.setState({})
    }
    //const userData = {
    //    email: this.state.email,
    //    password: this.state.password
    //}
    //this.props.loginUser(userData)
  };
  render() {
    const { email, password, errors } = this.state;
    if (email === '123@123' && password === '123') {
      return (
        <div className="wrapper-login">
          <header className="header-description">
            <p>Конструктор помещений</p>
          </header>
          <main className="main-block">
            <form className="main-block__form" onSubmit={this.onSubmit}>
              <div className="main-block__form-content">
                <div className="main-block__form-content__description">Почта</div>
                <input
                  onChange={this.onChange}
                  value={email}
                  errors={errors}
                  id="email"
                  type="email"
                  className="main-block__form-content__input"
                />
                {/*<div className='login-block__errors'>
                    {errors.email}
                </div>*/}
              </div>
              <div className="main-block__form-content">
                <div className="main-block__form-content__description">Пароль</div>
                <input
                  onChange={this.onChange}
                  value={password}
                  errors={errors}
                  id="password"
                  type="password"
                  className="main-block__form-content__input"
                />
                {/*<div className='login-block__errors'>
                    {errors.password}
                </div>*/}
              </div>
              <div className="main-block__form-content">
                <Link to='/dashboard'>
                    <input type="submit" value="Войти" />
                </Link>
              </div>
            </form>
          </main>
          <footer className="footer">
            <h3>Copyright 2020 &copy; CARDDEX</h3>
            <p>Информация на сайте не является публичной офертой</p>
          </footer>
        </div>
      );
    }
    return (
      <div className="wrapper-login">
        <header className="header-description">
          <p>Конструктор помещений</p>
        </header>
        <main className="main-block">
          <form className="main-block__form" onSubmit={this.onSubmit}>
            <div className="main-block__form-content">
              <div className="main-block__form-content__description">Почта</div>
              <input
                onChange={this.onChange}
                value={email}
                errors={errors}
                id="email"
                type="email"
                className="main-block__form-content__input"
              />
              {/*<div className='login-block__errors'>
                                {errors.email}
                            </div>*/}
            </div>
            <div className="main-block__form-content">
              <div className="main-block__form-content__description">Пароль</div>
              <input
                onChange={this.onChange}
                value={password}
                errors={errors}
                id="password"
                type="password"
                className="main-block__form-content__input"
              />
              {/*<div className='login-block__errors'>
                    {errors.password}
                </div>*/}
            </div>
            <div className="main-block__form-content">
              <input type="submit" value="Войти" />
            </div>
          </form>
        </main>
        <footer className="footer">
          <h3>Copyright 2020 &copy; CARDDEX</h3>
          <p>Информация на сайте не является публичной офертой</p>
        </footer>
      </div>
    );
  }
}
Login.propTypes = {
  login: PropTypes.object,
  errors: PropTypes.object
};
const mapStateToProps = state => ({
  login: state.login,
  errors: state.errors
});
export default connect(mapStateToProps, null)(Login);