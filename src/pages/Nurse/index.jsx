import NurseList from '../../components/NurseList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddNurse from '../../components/AddNurse';
import styles from './Nurse.module.scss';
import classNames from 'classNames/bind';
import Header from '../../components/commons/Header'

const cx = classNames.bind(styles);

function Nurse() {
    const [nurseList, setNurseList] = useState([]);
    const [total, setTotal] = useState(nurseList.length);
    const updateTotal = () => {
        setTotal((pre) => pre + 1);
    };
    useEffect(() => {
        axios
            .get('http://localhost:3000/nurses')
            .then((response) => setNurseList(response.data))
            .then(() => setTotal(nurseList.length))
            .catch((error) => console.log(error));
    }, [nurseList]);

    const createNurse = (newNurse) => {
        axios
            .post('http://localhost:3000/nurses', newNurse)
            .then((response) => setNurseList([...nurseList, response.data]))
            .catch((error) => console.log(error));
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('nurse-icon')}>
                <img src="src/assets/nurse.png" />
            </div>
            <div className={cx('header')}>
                <div className={cx('header-general')}>
                    <p className={cx('header-title')}>Y tá hiện có</p>
                    <span className={cx('header-count')}>{total}</span>
                </div>
                <input className={cx('search')} placeholder="Nhập tên/mã số nhân viên y tá cần tìm..."></input>
                <div className={cx('add-nurse')}>
                    <AddNurse callAPI={createNurse} updateTotal={updateTotal} />
                </div>
            </div>
            <div className={cx('nurse-space')}>
                <div className={cx('label')}>
                    <div className={cx('id')}>Mã số</div>
                    <div className={cx('name')}>Họ tên</div>
                    <div className={cx('sex')}>Giới tính</div>
                    <div className={cx('qualification')}>Chứng chỉ</div>
                    <div className={cx('major')}>Chuyên môn</div>
                    <div className={cx('floor')}>Tầng</div>
                    <div className={cx('room')}>Phòng</div>
                    <div className={cx('day-off')}>Ngày nghĩ trong tuần</div>
                </div>
                <NurseList ls={nurseList} />
            </div>
        </div>
    );
}

export default Nurse;
