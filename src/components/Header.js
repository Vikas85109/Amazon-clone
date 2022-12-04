import React from 'react'
import './Header.css'

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className="header">
                <Link to='/'>
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="logo" className='header__logo' />
                </Link>
                <div className="header__serach">
                    <input type="text" name="" id="" />
                    <SearchIcon className='header__searchIcon' />
                </div>

                <div className="header__nav">
                    <div className="header__option">
                        <span className='header__optionone'>Hello Vikas</span>
                        <span className='header__optiontwo'>Sign In</span>
                    </div>

                    <div className="header__option">
                        <span className='header__optionone'>Return</span>
                        <span className='header__optiontwo'>& Orders</span>
                    </div>

                    <div className="header__option">
                        <span className='header__optionone'>Your</span>
                        <span className='header__optiontwo'>Prime</span>
                    </div>
                </div>

                <div className="header__optionBasket">
                    <Link to='/cart'>
                        <ShoppingCartIcon />


                        <span>10</span>
                    </Link>
                </div>

            </div>

            <div className="header__buttom">
                <ul>
                    <li>All</li>
                    <li>Mobile</li>
                    <li>Category</li>
                    <li>Computer</li>
                    <li>Cloths</li>
                    <li>Shoes</li>
                    <li>Electronocs</li>

                    <li><img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_Crushed-S2._CB620377409_.jpg" alt="img" /></li>
                </ul>
            </div>

        </>
    )
}

export default Header