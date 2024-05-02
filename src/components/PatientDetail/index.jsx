import classNames from 'classNames/bind';
import styles from './PatientDetail.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddDoctorActivity from '../AddDoctorActivity';
// import PatientInfo from '../PatientInfo';
// import PatientInfo from '../PatientInfo';
const cx = classNames.bind(styles);

function PatientDetail() {
    // const [patientList, setPatientList] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/patients').then((response) => {
    //         setPatientList(response.data);
    //     });
    // },[]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <Link to="/hospital-manage/patient-schedule" className={cx('schedule-btn')}>
                    Kế hoạch điều trị
                </Link>
                <Link to="/hospital-manage/patient" className={cx('list-btn')}>
                    Danh sách bệnh nhân
                </Link>
            </div>
            {/* Add component */}
            <div className={cx('patient-info')}>
                <p className={cx('title')}>Thông tin bệnh nhân</p>
                <div className={cx('patient-info-wrapper')}>
            <img className={cx('avatar')} src=" src/assets/patient-avt.png" ></img>
            <div className={cx('body')}>
                <h3 className={cx('body-title')}>Thông tin chung</h3>
                <p className={cx('body-content')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ul className={cx('list-info')}>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Họ và tên</h4>
                        <p className={cx('list-info-content')}>Nguyễn Văn A </p>
                    </li>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Ngày sinh</h4>
                        <p className={cx('list-info-content')}> 29-12-2003</p>
                    </li>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Nhóm máu</h4>
                        <p className={cx('list-info-content')}> AB </p>
                    </li>
                    <li className={cx('list-info-item')}>
                        <h4 className={cx('list-info-header')}>Địa chỉ</h4>
                        <p className={cx('list-info-content')}>26 Tô Ngọc Vân, Linh Trung, Thủ Đức, TPHCM</p>
                    </li>
                </ul>
            </div>
        </div>   
                <div className={cx('history-wrapper')}>
                    <div className={cx('history-header-wrapper')}>
                        <h4 className={cx('history-wrapper-header')}>Lịch sử khám</h4>
                        <AddDoctorActivity/>
                    </div>
                    <div className={cx('history-title-wrapper')}>
                        <ul className={cx('history-title-list')}>
                            <li className={cx('history-title-item')}>Ngày</li>
                            <li className={cx('history-title-item')}>Bác sĩ chỉ định</li>
                            <li className={cx('history-title-item')}>Bác sĩ thực hiện</li>
                            <li className={cx('history-title-item')}>Phương pháp</li>
                            <li className={cx('history-title-item')}>Trạng thái</li>
                            <li className={cx('history-title-item')}>Kết quả</li>
                        </ul>
                    </div>

                    <div className={cx('history-body-wrapper')}>
                        <ul className={cx('history-body-list')}>
                            <li className={cx('history-body-item--date')}>12-02-2023</li>
                            <li className={cx('history-body-item')}>
                                Trương Văn Nghĩa <br />
                                BSNTH030821
                            </li>
                            <li className={cx('history-body-item')}>
                                Trương Thanh An
                                <br />
                                BSNTH130821
                            </li>
                            <li className={cx('history-body-item', 'history-body-item--method')}>X-Ray</li>
                            <li className={cx('history-body-item', 'history-body-item--status')}>Chờ kết quả</li>
                            <li className={cx('history-body-item', 'history-body-item--result')}>Chi tiết</li>
                        </ul>
                        <ul className={cx('history-body-list')}>
                            <li className={cx('history-body-item--date')}>12-02-2023</li>
                            <li className={cx('history-body-item')}>
                                Trương Văn Nghĩa <br />
                                BSNTH030821
                            </li>
                            <li className={cx('history-body-item')}>
                                Trương Thanh An
                                <br />
                                BSNTH130821
                            </li>
                            <li className={cx('history-body-item', 'history-body-item--method')}>X-Ray</li>
                            <li className={cx('history-body-item', 'history-body-item--status')}>Chờ kết quả</li>
                            <li className={cx('history-body-item', 'history-body-item--result')}>Chi tiết</li>
                        </ul>
                        <ul className={cx('history-body-list')}>
                            <li className={cx('history-body-item--date')}>12-02-2023</li>
                            <li className={cx('history-body-item')}>
                                Trương Văn Nghĩa <br />
                                BSNTH030821
                            </li>
                            <li className={cx('history-body-item')}>
                                Trương Thanh An
                                <br />
                                BSNTH130821
                            </li>
                            <li className={cx('history-body-item', 'history-body-item--method')}>X-Ray</li>
                            <li className={cx('history-body-item', 'history-body-item--status')}>Chờ kết quả</li>
                            <li className={cx('history-body-item', 'history-body-item--result')}>Chi tiết</li>
                        </ul>
                        <ul className={cx('history-body-list')}>
                            <li className={cx('history-body-item--date')}>12-02-2023</li>
                            <li className={cx('history-body-item')}>
                                Trương Văn Nghĩa <br />
                                BSNTH030821
                            </li>
                            <li className={cx('history-body-item')}>
                                Trương Thanh An
                                <br />
                                BSNTH130821
                            </li>
                            <li className={cx('history-body-item', 'history-body-item--method')}>X-Ray</li>
                            <li className={cx('history-body-item', 'history-body-item--status')}>Chờ kết quả</li>
                            <li className={cx('history-body-item', 'history-body-item--result')}>Chi tiết</li>
                        </ul>
                        <ul className={cx('history-body-list')}>
                            <li className={cx('history-body-item--date')}>12-02-2023</li>
                            <li className={cx('history-body-item')}>
                                Trương Văn Nghĩa <br />
                                BSNTH030821
                            </li>
                            <li className={cx('history-body-item')}>
                                Trương Thanh An
                                <br />
                                BSNTH130821
                            </li>
                            <li className={cx('history-body-item', 'history-body-item--method')}>X-Ray</li>
                            <li className={cx('history-body-item', 'history-body-item--status')}>Chờ kết quả</li>
                            <li className={cx('history-body-item', 'history-body-item--result')}>Chi tiết</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientDetail;
