import BoxIcon from './Boxicon/Boxicon';
import { dataBoxIcon, dataMenu } from './Boxicon/Constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/img/logo.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import useScrollHandling from '@/hooks/useScrollHandling.js';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        topHeader,
        fixedHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    console.log(isOpen);

    const headerClass = classNames(container, topHeader, {
        [fixedHeader]: fixedPosition
    });

    useEffect(() => {
        // Cách 1:
        // if (scrollPosition > 80) {
        //     setFixedPosition(true);
        // } else {
        //     setFixedPosition(false);
        // }

        // Cách 2:
        // setFixedPosition(scrollPosition > 80 ? true : false);

        // Cách 3:
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div className={headerClass}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt=''
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBoxIcon}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img width={26} height={26} src={reloadIcon} alt='' />
                        <img width={26} height={26} src={heartIcon} alt='' />
                        <img width={26} height={26} src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
