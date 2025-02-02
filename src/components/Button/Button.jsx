import styles from './styles.module.scss';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types, no-unused-vars
function Button({ content, isPrimary = true }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    const btnClass = classNames(btn, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary
    });

    return <button className={btnClass}>{content}</button>;
}

export default Button;
