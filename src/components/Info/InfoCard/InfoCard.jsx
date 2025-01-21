import styles from '../styles.module.scss';

// eslint-disable-next-line react/prop-types
function InfoCard({ title, des, src }) {
    const { containerCard, containerContent } = styles;

    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt='' />

            <div className={containerContent}>
                <div>{title}</div>
                <div>{des}</div>
            </div>
        </div>
    );
}

export default InfoCard;
