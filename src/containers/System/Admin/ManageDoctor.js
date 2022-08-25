import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../../store/actions/actionTypes';
import * as actions from '../../../store/actions';
import Select from 'react-select';
import { LANGUAGES } from '../../../utils';

// import './ManageDoctor.scss';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdoselectedDoctorwn parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentMarkdown: '',
			contentHTML: '',
			selectedDoctor: '',
			description: '',
			listDoctors: [],
			currentDoctor: '',
		};
	}

	componentDidMount() {
		this.props.fetchAllDoctors();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.allDoctors !== this.props.allDoctors) {
			let dataSelect = this.buildDataSelect(this.props.allDoctors);
			this.setState({
				listDoctors: dataSelect,
			});
		}

		if (
			prevState.currentDoctor !== this.state.currentDoctor &&
			this.state.currentDoctor.errCode === 0
		) {
			let infoCurrent = { ...this.state.currentDoctor.data };
			if (infoCurrent) {
				this.setState({
					contentMarkdown: infoCurrent.contentMarkdown,
					contentHTML: infoCurrent.contentHTML,
					description: infoCurrent.description,
				});
			}
		}

		if (
			prevState.currentDoctor !== this.state.currentDoctor &&
			this.state.currentDoctor.errCode !== 0
		) {
			this.setState({
				contentMarkdown: '',
				contentHTML: '',
				description: '',
				currentDoctor: '',
			});
		}
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

	handleEditorChange = ({ html, text }) => {
		this.setState({
			contentHTML: html,
			contentMarkdown: text,
		});
	};

	handleSaveContentMarkdown = () => {
		let dataSave = {
			id: this.state.selectedDoctor.value,
			contentHTML: this.state.contentHTML,
			contentMarkdown: this.state.contentMarkdown,
			description: this.state.description,
		};
		if (!this.state.currentDoctor) {
			this.props.saveInfoDoctor(dataSave);
		} else {
			this.props.saveEditInfoDoctor(dataSave);
		}
	};

	handleChangeDoctor = async (selectedDoctor) => {
		await this.props.checkInfoDoctorExist(selectedDoctor.value);
		this.setState({ selectedDoctor, currentDoctor: this.props.doctorInfo });
	};

	handleChangeDescription = (e) => {
		this.setState({
			description: e.target.value,
		});
	};

	render() {
		return (
			<>
				<div className='container'>
					<div className='row'>
						<div className='h2 text-center my-3 col-12'>
							THÊM THÔNG TIN CHI TIẾT BÁC SĨ
						</div>

						<div className='col-6'>
							<label className='form-label'>Chọn bác sĩ</label>
							<Select
								value={this.state.selectedDoctor}
								onChange={this.handleChangeDoctor}
								options={this.state.listDoctors}
							/>
						</div>
						<div className='more-info mb-3 col-6'>
							<label className='form-label'>
								Thông tin giới thiệu:
							</label>
							<textarea
								onChange={(e) =>
									this.handleChangeDescription(e)
								}
								value={this.state.description}
								className='form-control'
								rows={4}></textarea>
						</div>
					</div>
					<MdEditor
						style={{ height: '500px' }}
						renderHTML={(text) => mdParser.render(text)}
						onChange={this.handleEditorChange}
						value={this.state.contentMarkdown}
					/>
					<div className='my-3'>
						<button
							className='btn btn-primary px-2'
							onClick={() => this.handleSaveContentMarkdown()}>
							Lưu thông tin
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
		language: state.app.language,
		doctorInfo: state.admin.doctorData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
		saveInfoDoctor: (data) => dispatch(actions.saveInfoDoctor(data)),
		checkInfoDoctorExist: (id) =>
			dispatch(actions.checkInfoDoctorExist(id)),
		saveEditInfoDoctor: (data) =>
			dispatch(actions.saveEditInfoDoctor(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
