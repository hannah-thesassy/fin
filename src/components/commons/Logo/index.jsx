import classNames from 'classNames/bind';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <Link to="/hospital-manage/dashboard">
            <div className={cx('logo-wrapper')}>
                <img className={cx('logo-img')} src="src/assets/logo.png" alt="BKMEC"></img>
            </div>
        </Link>
    );
}

export default Logo;
