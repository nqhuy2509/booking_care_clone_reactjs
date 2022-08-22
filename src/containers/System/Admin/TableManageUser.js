import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../../store/actions/actionTypes';
import * as actions from '../../../store/actions';

import './TableManageUser.scss';

class TableManageUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allUsers: [],
		};
	}

	componentDidMount() {
		this.props.getAllUser();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.users !== this.props.users) {
			this.setState({
				allUsers: this.props.users,
			});
		}
	}

	handleDeleteUser = (user) => {
		this.props.deleteUser(user.id);
	};

	handleEditUser = (user) => {
		this.props.handleEditUserFromParent(user);
	};

	render() {
		return (
			<table className='table table-bordered table-hover'>
				<thead className='table-success'>
					<tr>
						<th scope='col' className='text-center'>
							ID
						</th>
						<th scope='col'>Email</th>
						<th scope='col'>First Name</th>
						<th scope='col'>Last Name</th>
						<th scope='col'>Address</th>
						<th scope='col' className='text-center'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{this.state.allUsers &&
						this.state.allUsers.map((item, index) => {
							return (
								<tr key={index}>
									<th scope='row' className='text-center'>
										{item.id}
									</th>
									<td>{item.email}</td>
									<td>{item.firstName}</td>
									<td>{item.lastName}</td>
									<td>{item.address}</td>
									<td className='text-center'>
										<button
											className='edit-btn'
											onClick={() =>
												this.handleEditUser(item)
											}>
											<i className='fas fa-edit'></i>
										</button>
										<button
											className='delete-btn'
											onClick={() =>
												this.handleDeleteUser(item)
											}>
											<i className='fas fa-trash-alt'></i>
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.admin.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllUser: () => dispatch(actions.fetchAllUser()),
		deleteUser: (id) => dispatch(actions.deleteUser(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
