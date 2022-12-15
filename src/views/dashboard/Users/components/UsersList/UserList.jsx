import { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';

import DataTable from 'react-data-table-component'

import './styles/UserList.scss';
import UserForm from '../forms/UserForm';

const UserList = () => {
	const { users, deleteUser } = useUserContext()

	const [usersLocal, setUsersLocal] = useState([])
	const [search, setSearch] = useState('')
	const [userUpdate, setuserUpdate] = useState(null)

	useEffect(() => {
		setUsersLocal(users)
		return function cleanUp() {
		}
	}, [users])

	useEffect(() => {
		if (search.trim() === '') {
			setUsersLocal(users)
		}
		return function cleanUp() {

		}
	}, [search])

	const searchElements = () => {
		const elements = usersLocal.filter((item) => {
			if (
				item.nick_name.includes(search) || item.first_name.includes(search) || item.last_name.includes(search) || item.position.includes(search)
			) {
				return item
			}

			return undefined
		})
		setUsersLocal(elements)
	}

	const handleInputChange = (event) => {
		setSearch(event.target.value)
		searchElements()
	}

	const deleteUserId = async (userId) => {
		await deleteUser.mutate(userId)

	}

	const editUser = async (userId) => {
		const user = await users.filter(item => item._id === userId)
		setuserUpdate(user[0])
	}

	const columns = [
		{
			name: 'Usuario',
			selector: row => row.nick_name,
			sortable: true,
		},
		{
			name: 'Nombre y apellidos',
			selector: row => row.first_name + "" + row.last_name,
			sortable: true,

		},
		{
			name: 'Cargo',
			selector: row => row.position,
			sortable: true,
		},
		{
			name: 'Rol',
			selector: row => row.role,
			sortable: true,
		},

		{
			name: '',
			cell: row => (
				<div className='d-flex gap-1 justify-content-center'>
					<a href='#form' className="btn btn-warning text-white btn-sm"
						onClick={() => editUser(row._id)}
					>
						<i className="bi bi-pencil-square"></i>
					</a>
					<button onClick={() => deleteUserId(row._id)} className='btn btn-danger btn-sm'>
						<i className="bi bi-trash-fill"></i>
					</button>
				</div>
			)
			,
			allowOverflow: true,
			button: true,
			width: '100px',
		},
	]

	return (
		<section className='userlist'>

<div className='container mt-3'>
			<h2 className='text-center text-secondary mt-5 p-3'>Listado de Usuarios</h2>
			<div className='card '>
			<div className='card-body'>
				<div className='table-responsibe'>
					<div className="mb-3 d-flex justify-content-between gap-3">
						<input type="text" className="form-control w-25" id="search" placeholder="Busqueda" value={search} onChange={handleInputChange} />
						<a href='#form' className='btn btn-primary customize-btn'>
							<i className="bi bi-plus-lg"></i>
						</a>
					</div>


					<DataTable
						columns={columns}
						data={usersLocal}
						pagination
						highlightOnHover
						paginationComponentOptions={
							{
								rowsPerPageText: 'Filas por pagina',
								rangeSeparatorText: 'de',
								selectAllRowsItem: true,
								selectAllRowsItemText: 'Todos'
							}
						}
						fixedHeader
						fixedHeaderScrollHeight='600px'
						noDataComponent='No hay resultados'
					/>
				</div>
				</div>
				</div>
				<UserForm user={userUpdate}/>
			</div>

		</section>
	)
};

export default UserList;
