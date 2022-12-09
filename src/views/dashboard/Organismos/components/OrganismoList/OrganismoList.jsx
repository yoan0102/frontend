import { useState, useEffect } from 'react';
import { useOrganismoContext } from '../../context/OrganismoContext';

import DataTable from 'react-data-table-component'

import './styles/OrganismoList.scss';

const OrganismoList = () => {
	const { data } = useOrganismoContext()

	const [organismos, setOrganismos] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		setOrganismos(data)
		return function cleanUp() {

		}
	}, [])

	const searchElements = () => {
		const elements = organismos.filter((item) => {
			if (
				item.name.includes(search) ||
				item.id.includes(search)
			) {
				return item
			}
		})
		setOrganismos(elements)
	}

	const handleInputChange = (event) => {
		setSearch(event.target.value)
		searchElements()
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
			cell: row => <input type="checkbox" name="" id="" checked={row} />,
			sortable: true,

		},
		{
			name: 'Actions',
			cell: row => (
				<div className='d-flex gap-1 justify-content-center'>
					<button className="btn btn-warning text-white btn-sm"
						onClick={() => alert('CLik')}
					>
						<i className="bi bi-pencil-square"></i>
					</button>
					<button className='btn btn-danger btn-sm'>
						<i className="bi bi-trash-fill"></i>
					</button>
				</div>
			)
			,
			allowOverflow: true,
			button: true,
			width: '56px',
			grow: 10
		},
	]

	return (
		<section className='organismolist'>

			<h2 className='text-center text-primary mt-5 p-5'>Listado de Planillas</h2>
			<div className="container">
				<div className='table-responsibe'>
					<div className="mb-3">
						<input type="text" className="form-control" id="search" placeholder="Busqueda" value={search} onChange={handleInputChange} />
					</div>

					<DataTable
						columns={columns}
						data={organismos}
						title='Listado de Planillas'
						pagination
						paginationComponentOptions={
							{
								rowsPerPageText: 'Filas por pagina',
								rangeSeparatorText: 'de',
								selectAllRowsItem: true,
								expandableRows: true,
								selectAllRowsItemText: 'Todos'
							}
						}
						fixedHeader
						fixedHeaderScrollHeight='600px'
						noDataComponent='No hay resultados'
					/>
				</div>
			</div>

		</section>
	)
};

export default OrganismoList;
