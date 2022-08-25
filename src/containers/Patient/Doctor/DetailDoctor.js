import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';

import imgDoctor from '../../../assets/images/section/doctor/160049-bs-hoai-huong.jpg';

class DetailDoctor extends Component {
	render() {
		return (
			<>
				<HomeHeader isShowBanner={false} />
				<div className='doctor-detail-container'>
					<div className='doctor-info container'>
						<div className='doctor-image'>
							<img src={imgDoctor} alt='imgDoctor' />
						</div>
						<div className='doctor-description'>
							<h2>
								Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
							</h2>
							<p>
								Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh
								viện Tai Mũi Họng Trung ương
								<br />
								Trên 25 năm công tác tại Bệnh viện Tai mũi họng
								Trung ương
								<br />
								Chuyên khám và điều trị các bệnh lý Tai Mũi Họng
								người lớn và trẻ em
							</p>
						</div>
					</div>

					<div className='doctor-detail'>
						<div className='container'>
							Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An Phó
							Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng Nguyên
							Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi
							Họng Trung ương Trên 25 năm công tác tại Bệnh viện
							Tai Mũi Họng Trung ương Bác sĩ Nội trú chuyên ngành
							Tai Mũi Họng Bác sĩ đã từng tu nghiệp Cộng hòa Pháp
							về Tai Mũi Họng Khám & điều trị Chuyên khám và điều
							trị các bệnh lý Tai Mũi Họng người lớn Chuyên khám
							và điều trị các bệnh lý Tai Mũi Họng trẻ em Nội soi
							Tai Mũi Họng Thực hiện các qui trình kỹ thuật Tai
							Mũi Họng Các bệnh về tai Ù tai, nghe kém, điếc đột
							ngột Chẩy mủ tai, viêm tai giữa cấp, mạn Vá màng nhĩ
							nội soi Phát hiện sớm và điều trị tốt bệnh viêm tai
							giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài Các
							bệnh mũi xoang Viêm mũi xoang dị ứng, viêm mũi vận
							mạch Viêm mũi ngạt tắc mũi mạn tính Viêm đa xoang
							mạn lâu ngày khó khỏi, polyp mũi xoang Nấm mũi xoang
							Đau đầu mạn tính do mũi xoang… Các bệnh về họng
							thanh quản Ở trẻ em viêm VA, viêm mũi họng mạn tính
							Các biến chứng của viêm VA (như viêm tai thanh dịch,
							viêm tai giữa cấp, viêm thanh khí phế quản….) Viêm
							amiđan cấp, mạn Nạo V.A Cắt Amidan
						</div>
					</div>
					<div></div>
					<div></div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
