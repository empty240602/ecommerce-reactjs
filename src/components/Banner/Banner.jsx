import Button from '../Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const { container, content, tilte, des } = styles;

    return (
        <div>
            <div className={container}>
                <div className={content}>
                    <h1 className={tilte}>Lorem Ipsum Dolor Sit Amet.</h1>
                    <div className={des}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur, fuga.
                    </div>

                    <Button content={'Go To Shop'} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
