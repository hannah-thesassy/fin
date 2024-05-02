import classNames from 'classNames/bind';
import styles from './PatientInfo.module.scss';


const cx = classNames.bind(styles);

function PatientInfo({ patient }) {
    // console.log(patient);
    return (
        <div className={cx('patient-info-wrapper')}>
            <img className={cx('avatar')} src={patient.image} ></img>
            <div className={cx('body')}>
                <h3 className={cx('body-title')}>Thông tin chung</h3>
                <p className={cx('body-content')}>{patient.genaral_info}</p>
                <ul className={cx('list-info')}>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Họ và tên</h4>
                        <p className={cx('list-info-content')}>{patient.name} </p>
                    </li>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Ngày sinh</h4>
                        <p className={cx('list-info-content')}> {patient.birthday} </p>
                    </li>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Nhóm máu</h4>
                        <p className={cx('list-info-content')}> {patient.blood_type} </p>
                    </li>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Địa chỉ</h4>
                        <p className={cx('list-info-content')}>{patient.address}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PatientInfo;
