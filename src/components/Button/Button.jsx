import styles from './styles.module.scss';

// eslint-disable-next-line react/prop-types
function Button({ content }) {
    const { btn } = styles;

    return <button className={btn}>{content}</button>;
}

export default Button;
