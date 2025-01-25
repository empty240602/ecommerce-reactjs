import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

// eslint-disable-next-line no-unused-vars, react/prop-types
function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgWhenHover,
        showFunctionWhenHover,
        boxIcon,
        productTitle,
        productPrice
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src='https://i.pinimg.com/736x/80/0f/e0/800fe005482647a62f09ca3da0125a8d.jpg'
                    alt=''
                />
                <img
                    src='https://i.pinimg.com/736x/40/74/13/4074139574ccd31a5f26e22b5915cf66.jpg'
                    alt=''
                    className={showImgWhenHover}
                />
                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={productTitle}>10K Yellow Gold</div>
            <div className={productPrice}>$99.99</div>
        </div>
    );
}

export default ProductItem;
