import styles from '../styles.module.scss';

// eslint-disable-next-line react/prop-types
function Menu({ content, href, setIsOpen }) {
    const { menu } = styles;

    console.log(href);
    return (
        <div className={menu} onClick={() => setIsOpen(true)}>
            {content}
        </div>
    );
}

export default Menu;
