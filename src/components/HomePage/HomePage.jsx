import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import styles from './styles.module.scss';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const { container } = styles;

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProduct().then((res) => {
            setListProduct(res.contents);
        });
    }, []);

    // console.log('listProduct', listProduct);

    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProducts data={listProduct.slice(0, 2)} />
                <PopularProduct
                    data={listProduct.slice(2, listProduct.length)}
                />
                <SaleHomePage />
                <MyFooter />
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
