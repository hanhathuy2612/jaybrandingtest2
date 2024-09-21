import React from 'react'
import './Banner.scss'
import CommonButton from '../CommonButton/CommonButton'
import { images } from '../../themes/imageRegistry'

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

                <CommonButton
                    icon={images.archiveRight}
                    text="Tìm hiểu thêm"
                ></CommonButton>
            </div>
        </div>
    )
}

export default Banner
