import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

// eslint-disable-next-line react/prop-types
const CountDownTimer = ({ targetDate }) => {
    // Khởi tạo state với giá trị mặc định an toàn
    const [timeLeft, setTimeLeft] = useState({});
    const { box, title } = styles;

    const calculateTimeleft = () => {
        // Kiểm tra nếu targetDate hợp lệ
        const target = new Date(targetDate);
        const difference = target - new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        if (!targetDate) return; // Nếu không có targetDate, không cần tính toán

        // Gọi tính toán ban đầu
        setTimeLeft(calculateTimeleft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeleft());
        }, 1000);

        // Dọn dẹp khi component unmount hoặc targetDate thay đổi
        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => {
        return String(number).padStart(2, '0');
    };

    // Kiểm tra xem timeLeft có các giá trị cần thiết chưa
    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <span key={interval} className={box}>
                    {formatNumber(timeLeft[interval])}{' '}
                    <span className={title}>{interval}</span>{' '}
                </span>
            );
        }
    });

    return (
        <div>
            {timerComponents.length > 0 ? (
                timerComponents
            ) : (
                <span>Time&apos;s up!</span> // Nếu hết thời gian hoặc chưa có thời gian
            )}
        </div>
    );
};

export default CountDownTimer;
