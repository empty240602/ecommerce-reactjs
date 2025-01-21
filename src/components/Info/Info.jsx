import MainLayout from '@components/Layout/Layout';
import { dataInfo } from './Constant';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item) => {
                    console.log(item);
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <InfoCard
                            title={item.title}
                            description={item.des}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default Info;
