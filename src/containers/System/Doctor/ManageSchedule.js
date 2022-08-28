import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageSchedule.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import Select from 'react-select';
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment';
import { toast } from 'react-toastify';

import { dateFormat, LANGUAGES } from '../../../utils';
import _ from 'lodash';

class ManageSchedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDoctor: {},
			listDoctors: [],
			currentDate: '',
			rangeTime: [],
		};
	}
	componentDidMount() {
		this.props.fetchAllDoctors();
		this.props.fetchAllcodeTime();
	}

	buildDataSelect = (inputData) => {
		let result = [];
		if (inputData && inputData.length > 0) {
			result = inputData.map((item) => {
				let obj = {};
				obj.label = `${item.firstName} ${item.lastName}`;
				obj.value = item.id;
				return obj;
			});
		}
		return result;
	};

	handleChangeDoctor = async (selectedDoctor) => {
		this.setState({
			selectedDoctor,
		});
	};

	handleOnChangeDatePicker = (date) => {
		this.setState({
			currentDate: date[0],
		});
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.allDoctors !== this.props.allDoctors) {
			let dataSelect = this.buildDataSelect(this.props.allDoctors);
			this.setState({
				listDoctors: dataSelect,
			});
		}

		if (prevProps.allTime !== this.props.allTime) {
			let data = this.props.allTime;
			if (data && data.length > 0) {
				data = data.map((item) => ({ ...item, isSelected: false }));
			}
			this.setState({
				rangeTime: data,
			});
		}
	}

	handleClickBtnTime = (time) => {
		let { rangeTime } = this.state;
		if (rangeTime && rangeTime.length > 0) {
			rangeTime.forEach((item) => {
				if (item.id === time.id) item.isSelected = !item.isSelected;
			});
		}
		this.setState({ rangeTime });
	};

	handleSaveSchedule = () => {
		let { rangeTime, selectedDoctor, currentDate } = this.state;
		let result = [];
		if (selectedDoctor && _.isEmpty(selectedDoctor)) {
			toast.error('Invalid selected doctor!');
			return;
		}
		if (!currentDate) {
			toast.error('Invalid date !');
			return;
		}
		let formatedDate = moment(currentDate).format(
			dateFormat.SEND_TO_SERVER
		);

		if (rangeTime && rangeTime.length > 0) {
			let selectedTime = rangeTime.filter((item) => item.isSelected);
			if (selectedTime && selectedTime.length > 0) {
				selectedTime.forEach((time) => {
					let obj = {
						doctorId: selectedDoctor.value,
						date: formatedDate,
						time: time.keyMap,
					};

					result.push(obj);
				});
			} else {
				toast.error('Please select schedule time');
				return;
			}
		}

		this.props.saveSchedule(result);

		console.log(result);
	};

	render() {
		let { rangeTime } = this.state;
		let { language } = this.props;
		return (
			<>
				<div className='manage-schedule-container'>
					<div className='title'>
						<FormattedMessage id='manage-schedule.title' />
					</div>
					<div className='container mt-5'>
						<div className='row'>
							<div className='col-6'>
								<label className='form-label'>
									<FormattedMessage id='manage-schedule.choose-doctor' />
								</label>
								<Select
									value={this.state.selectedDoctor}
									onChange={this.handleChangeDoctor}
									options={this.state.listDoctors}
								/>
							</div>
							<div className='col-6'>
								<label className='form-label'>
									<FormattedMessage id='manage-schedule.choose-date' />
								</label>
								<DatePicker
									onChange={this.handleOnChangeDatePicker}
									className='form-control'
									selected={this.state.currentDate}
									minDate={new Date()}
								/>
							</div>
							<div className='col-12 hour-container'>
								{rangeTime &&
									rangeTime.length > 0 &&
									rangeTime.map((item, index) => {
										return (
											<button
												className={
													(item.isSelected
														? 'btn-warning'
														: 'btn-primary') +
													' btn px-2 btn-schedule-time'
												}
												key={index}
												onClick={() =>
													this.handleClickBtnTime(
														item
													)
												}>
												{language === LANGUAGES.VI
													? item.valueVi
													: item.valueEn}
											</button>
										);
									})}
							</div>
						</div>
						<button
							className='btn btn-success px-2'
							onClick={() => this.handleSaveSchedule()}>
							<FormattedMessage id='manage-schedule.save' />
						</button>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		allDoctors: state.admin.allDoctors,
		allTime: state.admin.allTime,
		language: state.app.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
		fetchAllcodeTime: () => dispatch(actions.fetchAllcodeTime()),
		saveSchedule: (data) => dispatch(actions.saveBulkScheduleDoctor(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
