import { useState, useEffect } from 'react';
import { useOrganismoContext } from '../../context/OrganismoContext';

import DataTable from 'react-data-table-component'

import './styles/OrganismoList.scss';
import OrganismoForm from '../forms/OrganismoForm';

const OrganismoList = () => {
	const { data, deleteOrganismo } = useOrganismoContext()

	const [organismos, setOrganismos] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		setOrganismos(data)
		return function cleanUp() {
		}
	}, [data])

	useEffect(() => {
		if (search.trim() === '') {
			setOrganismos(data)
		}
		return function cleanUp() {

		}
	}, [search])

	const searchElements = () => {
		const elements = organismos.filter((item) => {
			if (
				item.name.includes(search) || item.description.includes(search)
			) {
				return item
			}

			return undefined
		})
		setOrganismos(elements)
	}

	const handleInputChange = (event) => {
		setSearch(event.target.value)
		searchElements()
	}

	const deleteOrganismoId = async (organismoId) => {
		await deleteOrganismo.mutate(organismoId)

	}

	const columns = [
		{
			name: 'Nombre',
			selector: row => row.name,
			sortable: true,
		},
		{
			name: 'Descripcion',
			selector: row => row.description,
			sortable: true,

		},
		{
			name: 'Priorizado',
			selector: row => row.priorizado,
			cell: row => row.priorizado ? <i className="fs-5 text-success  bi bi-check2-square"></i> : <i className="fs-5 text-secondary bi bi-app"></i>,
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
					<button onClick={() => deleteOrganismoId(row._id)} className='btn btn-danger btn-sm'>
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
		<section className='organismolist '>

			<div className="container">
			<h2 className='text-center text-primary p-5'>Listado de Organismos</h2>
				<div className='table-responsibe'>
					<div className="mb-3 d-flex justify-content-between gap-3">
						<input type="text" className="form-control w-25" id="search" placeholder="Busqueda" value={search} onChange={handleInputChange} />
						<a href='#form' className='btn btn-primary customize-btn'>
							<i className="bi bi-plus-lg"></i>
						</a>
					</div>


					<DataTable
						columns={columns}
						data={organismos}
						// title='Listado de Organismos'
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
				<OrganismoForm />
			</div>

		</section>
	)
};

export default OrganismoList;
