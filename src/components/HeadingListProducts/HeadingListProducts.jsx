// import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProducts() {
    // const targetDate = '2025-12-31T23:59:59';
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            {/* <CountDownTimer targetDate={targetDate} /> */}

            <div className={container}>
                <CountDownBanner />
                <div className={containerItem}>
                    <div>
                        <ProductItem />
                    </div>
                    <div>
                        <ProductItem />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
