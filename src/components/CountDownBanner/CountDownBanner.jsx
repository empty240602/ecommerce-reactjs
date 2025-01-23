import styles from './styles.module.scss';
import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import Button from '@components/Button/Button';

function CountDownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T23:59:59';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountDownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The Classic Make A Comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy Now'} />
            </div>
        </div>
    );
}

export default CountDownBanner;
