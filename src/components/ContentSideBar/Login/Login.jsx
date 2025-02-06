import InputCommon from '@components/InputCommon/InputCommon';
import Button from '@components/Button/Button';
import styles from './styles.module.scss';

function Login() {
    const { container, title, boxRememberMe, lostPassword } = styles;
    return (
        <div className={container}>
            <div className={title}>Sign In</div>

            <InputCommon label='Username or Email' type='text' isRequired />
            <InputCommon label='Password' type='password' isRequired />

            <div className={boxRememberMe}>
                <input type='checkbox' />
                <span>Remember Me</span>
            </div>

            <Button content={'LOGIN'} />

            <div className={lostPassword}>Lost Your Password? </div>
        </div>
    );
}

export default Login;
