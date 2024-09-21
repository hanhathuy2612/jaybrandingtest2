import React from 'react'
import './Header.scss'
import logo from '../../assets/images/main-logo.png'
import vi from '../../assets/images/vi.svg'
import us from '../../assets/images/us.svg'
import phone from '../../assets/images/phone.svg'
import search from '../../assets/images/search.svg'
import loginIcon from '../../assets/images/login-icon.svg'
import facebook from '../../assets/images/facebook.svg'
import zalo from '../../assets/images/zalo.svg'
import youtube from '../../assets/images/youtube.svg'

function Header() {
    return (
        <header className="Header">
            <div className="Header__left">
                <img className="Header__logo" src={logo} alt="logo" />
            </div>

            <div className="Header__right">
                <div className="Header__social-login">
                    <div className="Header__social-medias">
                        <div className="Header__social-medias-item">
                            <img
                                className="Header__social-medias-item-icon"
                                src={facebook}
                                alt="Facebook"
                            />
                            <span className="Header__social-medias-item-text">
                                Facebook
                            </span>
                        </div>
                        <div className="Header__social-medias-item">
                            <img
                                className="Header__social-medias-item-icon"
                                src={youtube}
                                alt="Youtube"
                            />
                            <span className="Header__social-medias-item-text">
                                Youtube
                            </span>
                        </div>
                        <div className="Header__social-medias-item">
                            <img
                                className="Header__social-medias-item-icon"
                                src={zalo}
                                alt="Zalo"
                            />
                            <span className="Header__social-medias-item-text">
                                Zalo
                            </span>
                        </div>
                    </div>

                    <div className="Header__social-login-separator"></div>

                    <div className="Header__login-language">
                        <div className="Header__login-action">
                            <img
                                className="Header__login-action-icon"
                                src={loginIcon}
                                alt="login"
                            />
                            <span className="Header__login-action-text">
                                ĐĂNG NHẬP
                            </span>
                        </div>
                        <div className="Header__language-container">
                            <img
                                className="Header__language-item"
                                src={vi}
                                alt="vn"
                            ></img>
                            <img
                                className="Header__language-item"
                                src={us}
                                alt="us"
                            ></img>
                        </div>
                    </div>
                </div>

                <div className="Header__navigation">
                    <div className="Header__navbar">
                        <div className="Header__navbar-item">GIỚI THIỆU</div>
                        <div className="Header__navbar-item">SẢN PHẨM</div>
                        <div className="Header__navbar-item">
                            HỖ TRỢ KỸ THUẬT
                        </div>
                        <div className="Header__navbar-item">TIN TỨC</div>
                        <div className="Header__navbar-item">LIÊN HỆ</div>
                        <div className="Header__navbar-item">
                            <img
                                className="Header__search-icon"
                                src={search}
                                alt="search"
                            />
                        </div>
                    </div>

                    <div className="Header__hotline">
                        <div className="Header__hotline-image-wrapper">
                            <img
                                className="Header__hotline-image"
                                src={phone}
                                alt=""
                            />
                        </div>

                        <div className="Header__hotline-separate"></div>

                        <div className="Header__hotline-info">
                            <span className="Header__hotline-info-text">
                                HOTLINE
                            </span>
                            <span className="Header__hotline-info-number">
                                0912.345.678
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
