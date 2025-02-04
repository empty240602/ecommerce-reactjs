import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import useTranslateXImage from '@/hooks/useTranslateImage';

function SaleHomePage() {
    const { container, title, description, boxBtn, boxImg } = styles;

    const { translateXPosition } = useTranslateXImage();

    return (
        <div className={container}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://i.pinimg.com/736x/1f/ff/d3/1fffd3abfcfdee1ab9a6ac5c0a53c52c.jpg'
                    alt=''
                    width={400}
                    height={400}
                />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    In, iste!
                </p>
                <div className={boxBtn}>
                    <Button content={'Read More'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://i.pinimg.com/736x/1f/ff/d3/1fffd3abfcfdee1ab9a6ac5c0a53c52c.jpg'
                    alt=''
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}

export default SaleHomePage;
