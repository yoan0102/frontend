import { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';

import DataTable from 'react-data-table-component'

import './styles/UserList.scss';
import UserForm from '../forms/UserForm';

const UserList = () => {
	const { data, deleteUser } = useUserContext()

	const [users, setUsers] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		setUsers(data)
		return function cleanUp() {
		}
	}, [data])

	useEffect(() => {
		if (search.trim() === '') {
			setUsers(data)
		}
		return function cleanUp() {

		}
	}, [search])

	const searchElements = () => {
		const elements = users.filter((item) => {
			if (
				item.nick_name.includes(search) || item.first_name.includes(search)|| item.last_name.includes(search) || item.position.includes(search)
			) {
				return item
			}

			return undefined
		})
		setUsers(elements)
	}

	const handleInputChange = (event) => {
		setSearch(event.target.value)
		searchElements()
	}

	const deleteUserId = async (userId) => {
		await deleteUser.mutate(userId)

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
					<button className="btn btn-warning text-white btn-sm"
						onClick={() => alert('CLik')}
					>
						<i className="bi bi-pencil-square"></i>
					</button>
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
						data={users}
						// title='Listado de usuarios'
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
				<UserForm />
			</div>

		</section>
	)
};

export default UserList;
