import React from 'react'
import './Banner.scss'
import archiveRight from '../../assets/images/archive-right.svg'

function Banner() {
    return (
        <div className="Banner">
            <div className="Banner__content">
                <div className="Banner__text">
                    <p className="Banner__welcome">
                        CHÀO MỪNG ĐẾN VỚI
                        <p className="Banner__title">KHÓA KÉO HOÀN MỸ - HKK</p>
                    </p>
                </div>

                <p className="Banner__description">
                    Thương hiệu dây khoá kéo HKK của Công ty TNHH Khóa kéo Hoàn
                    Mỹ (HKK) đã gia nhập hàng loạt thị trường vốn được đánh giá
                    là khó tính trong khu vực và trên thế giới. Chặng đường 31
                    năm của thương hiệu này là một hành trình nỗ lực không
                    ngừng, với quyết tâm và tầm nhìn của những người lèo lái
                    "con thuyền" HKK vươn ra biển lớn.
                </p>

                <div className="Banner__button-wrapper">
                    <div className="Banner__button-behind-box"></div>
                    <button className="Banner__button">
                        <img
                            src={archiveRight}
                            alt="archiveRight"
                            className="Banner__button-icon"
                        />
                        <span className="Banner__button-text">
                            Tìm hiểu thêm
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
