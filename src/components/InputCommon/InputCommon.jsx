import { useState } from 'react';
import styles from './Styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

// eslint-disable-next-line react/prop-types
function InputCommon({ label, type, isRequired = false }) {
    const { container, labelInput, boxInput, boxIcon } = styles;

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isPassword = type === 'password';
    const isShowPasswordText =
        type === 'password' && showPassword ? 'text' : type;

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowPasswordText} />
                {isPassword && (
                    <div>
                        <div className={boxIcon} onClick={handleShowPassword}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
