import { useState, useEffect } from 'react';
import { useOrganismoContext } from '../../context/OrganismoContext';

import DataTable from 'react-data-table-component'

import './styles/OrganismoList.scss';
import OrganismoForm from '../forms/OrganismoForm';

const OrganismoList = () => {
	const { organismos, deleteOrganismo } = useOrganismoContext()

	const [organismosLocal, setOrganismosLocal] = useState([])
	const [search, setSearch] = useState('')
	const [organismoUpdate, setorganismoUpdate] = useState(null)

	useEffect(() => {
		setOrganismosLocal(organismos)
		return function cleanUp() {
		}
	}, [organismos])

	useEffect(() => {
		if (search.trim() === '') {
			setOrganismosLocal(organismos)
		}
		return function cleanUp() {

		}
	}, [search])

	const searchElements = () => {
		const elements = organismosLocal.filter((item) => {
			if (
				item.name.includes(search) || item.description.includes(search)
			) {
				return item
			}

			return undefined
		})
		setOrganismosLocal(elements)
	}

	const handleInputChange = (event) => {
		setSearch(event.target.value)
		searchElements()
	}

	const deleteOrganismoId = async (organismoId) => {
		await deleteOrganismo.mutate(organismoId)

	}

	const editOrganismo = async (organismoId) => {
		const organismo = await organismos.filter(item => item._id === organismoId)
		setorganismoUpdate(organismo[0])
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
					<a href='#form' className="btn btn-warning text-white btn-sm"
						onClick={() => editOrganismo(row._id)}
					>
						<i className="bi bi-pencil-square"></i>
					</a>
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
		<section className='organismolist'>

			<h2 className='text-center text-primary mt-5 p-5'>Listado de Planillas</h2>
			<div className="container">
				<div className='table-responsibe'>
					<div className="mb-3 d-flex justify-content-between gap-3">
						<input type="text" className="form-control w-25" id="search" placeholder="Busqueda" value={search} onChange={handleInputChange} />
						<a href='#form' className='btn btn-primary customize-btn'>
							<i className="bi bi-plus-lg"></i>
						</a>
					</div>


					<DataTable
						columns={columns}
						data={organismosLocal}
						// title='Listado de Planillas'
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
				<OrganismoForm organismo={organismoUpdate} />
			</div>

		</section>
	)
};

export default OrganismoList;
