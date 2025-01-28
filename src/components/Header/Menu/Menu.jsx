import styles from '../styles.module.scss';

// eslint-disable-next-line react/prop-types
function Menu({ content, href }) {
    const { menu } = styles;
    console.log(href);
    return <div className={menu}>{content}</div>;
}

export default Menu;
