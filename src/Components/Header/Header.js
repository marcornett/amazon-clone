import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../ContextAPI/StateProvider'
import './Header.css'
import { auth } from '../../Firebase/firebase';

function Header() {
    const [state,] = useStateValue()

    const login = () => {
        if (state.user) {
            auth.signOut()
        }
    }
    return (
        <>
            <nav className="header">
                <Link to='/'>
                    <img
                        className="header__logo"
                        src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
                        alt=""
                    />
                </Link>
                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <Link to={!state.user ? "/login" : ""} className="header__link">
                        <div onClick={login} className="header__option">
                            <span className="header__optionLineOne">Hello {state.user ? state.user.email : 'Guest'},</span>
                            <span className="header__optionLineTwo">{
                                state.user ? 'Sign out' : 'Sign in'
                            }</span>
                        </div>
                    </Link>
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            {/* Optional chaining using ?  https://dev.to/aumayeung/how-to-use-the-optional-chaining-operator-in-your-react-app-right-now-1ocj */}
                            <span className="header__optionLineTwo header__basketCount">{state.basket?.length}</span>
                        </div>
                    </Link>
                </div>

            </nav>
            <div className="header__linkbar"></div>
        </>
    )
}

export default Header