import styles from './styles.module.scss';

// eslint-disable-next-line react/prop-types
function Button({ content }) {
    const { btn } = styles;
    console.log(content);

    return <button className={btn}>{content}</button>;
}

export default Button;
