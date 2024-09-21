import React, { useEffect } from 'react'
import './Banner.scss'
import CommonButton from '../CommonButton/CommonButton'
import { images } from '../../themes/imageRegistry'

function Banner() {
    useEffect(() => {
        const points = document.querySelectorAll('.Banner__point')

        const handlePointEnter = (point) => () => {
            // Remove active class from all boxes
            points.forEach((b) => b.classList.remove('Banner__point--active'))
            // Add active class to the hovered box
            point.classList.add('Banner__point--active')
        }

        const handlePointLeave = (point) => () => {
            point.classList.remove('Banner__point--active')
            points[2].classList.add('Banner__point--active')
        }

        points.forEach((point) => {
            point.addEventListener('mouseenter', handlePointEnter(point))
            point.addEventListener('mouseleave', handlePointLeave(point))

            return () => {
                points.removeEventListener(
                    'mouseenter',
                    handlePointEnter(point)
                )
                points.removeEventListener(
                    'mouseleave',
                    handlePointLeave(point)
                )
            }
        })
    }, [])

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

            <div className="Banner__points">
                <div className="Banner__point"></div>
                <div className="Banner__point"></div>
                <div className="Banner__point Banner__point--active"></div>
                <div className="Banner__point"></div>
                <div className="Banner__point"></div>
            </div>
        </div>
    )
}

export default Banner
