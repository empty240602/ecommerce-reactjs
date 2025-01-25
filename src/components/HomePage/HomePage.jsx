import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import styles from './styles.module.scss';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';

function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProducts />
                <div
                    style={{
                        height: '200px'
                    }}
                ></div>
            </div>
        </div>
    );
}

export default HomePage;
