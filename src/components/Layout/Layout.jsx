import styles from './styles.module.scss';

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
    const { wrapLayout, container } = styles;

    return (
        <main className={wrapLayout}>
            <div className={container}>{children} </div>
        </main>
    );
}

export default MainLayout;
