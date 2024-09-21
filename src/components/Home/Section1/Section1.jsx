import React from 'react'
import './Section1.scss'
import { images } from '../../../themes/imageRegistry'
import CommonButton from '../../CommonButton/CommonButton'

const { section1Image, logo, num01, diamond } = images

function Section1() {
    return (
        <section className="Section1">
            <div className="Section1__wrapper">
                <div className="Section1__left">
                    <img src={section1Image} alt="section1-bg" />
                    <div className="Section1__logo-wrapper">
                        <img className="Section1__logo" src={logo} alt="logo" />
                    </div>
                    <div className="Section1__circle-arounded-logo"></div>
                </div>

                <div className="Section1__right">
                    <div className="Section1__header-wrapper">
                        <div className="Section1__header">
                            <img
                                className="Section1__header-num"
                                src={num01}
                                alt="num01"
                            />
                            <span className="Section1__header-text">
                                Giới thiệu
                            </span>
                        </div>

                        <div>
                            <p className="Section1__title">
                                Về Kéo Hoàn Mỹ - HKK
                            </p>
                            <p className="Section1__description">
                                Hoàn thành thành lập năm 1989, là một trong
                                những công ty đi đầu tiên trong lĩnh vực sản
                                xuất dây khóa tại Việt Nam. Với công nghệ, hiện
                                đại thiết bị và đồng bộ của Đức, Đài Loan cùng
                                với đội ngũ kỹ sư, nhân viên có trình độ nghiệp
                                vụ cao, sản phẩm dây kéo HKK được sản xuất theo
                                tiêu chuẩn quốc tế (ASTM D2016 : 2007, BS 3084:
                                2006, CNS, JIS-S 3015 ....).
                            </p>
                        </div>
                    </div>

                    <div className="Section1__stats-buttons">
                        <div className="Section1__stats">
                            <div className="Section1__stat-item">
                                <img
                                    className="Section1__stat-item-icon"
                                    src={diamond}
                                    alt="diamond"
                                />
                                <div className="Section1__stat-item-text">
                                    <span className="Section1__stat-item-text-number">
                                        +31
                                    </span>{' '}
                                    <span className="Section1__stat-item-text-label">
                                        NĂM KINH NGHIỆM
                                    </span>
                                </div>
                            </div>

                            <div className="Section1__stat-item">
                                <img
                                    className="Section1__stat-item-icon"
                                    src={diamond}
                                    alt="diamond"
                                />
                                <div className="Section1__stat-item-text">
                                    <span className="Section1__stat-item-text-number">
                                        +700
                                    </span>{' '}
                                    <span className="Section1__stat-item-text-label">
                                        Công nhân
                                    </span>
                                </div>
                            </div>

                            <div className="Section1__stat-item">
                                <img
                                    className="Section1__stat-item-icon"
                                    src={diamond}
                                    alt="diamond"
                                />
                                <div className="Section1__stat-item-text">
                                    <span className="Section1__stat-item-text-number">
                                        +200
                                    </span>{' '}
                                    <span className="Section1__stat-item-text-label">
                                        nhà phân phối chính thức
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="Section1__buttons">
                            <CommonButton
                                className="Section1__button"
                                icon={images.video}
                                text="Video giới thiệu"
                            />
                            <CommonButton
                                className="Section1__button"
                                icon={images.archiveRight}
                                text="Tìm hiểu thêm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1
