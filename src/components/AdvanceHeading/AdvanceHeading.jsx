import MainLayout from '../Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeading() {
    const { container, headline, containerMiddleBox, des, title } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>DON&apos;T MISS SUPPER</p>
                    <p className={title}>Our best products</p>
                </div>
                <div className={headline}></div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeading;
