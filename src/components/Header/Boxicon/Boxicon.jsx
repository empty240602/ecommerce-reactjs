import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import instaIcon from '@icons/svgs/instaIcon.svg';
import ybIcon from '@icons/svgs/ybIcon.svg';

// eslint-disable-next-line no-unused-vars, react/prop-types
function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return instaIcon;
            case 'ytb':
                return ybIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
