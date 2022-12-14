import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'

import './styles/GeneralList.scss';

const initialValue = [
	{
		id: '1',
		name: 'Peter Sanz Coco',
	},
	{
		id: '2',
		name: 'Yoan Blanco Rubio',
	},
	{
		id: '3',
		name: 'Juanito Perez Fitz',
	},
	{
		id: '4',
		name: 'Petra Sanz Coco',
	},
	{
		id: '5',
		name: 'Joana Blanco Rubio',
	}
]

const GeneralList = () => {
	const [users, setUsers] = useState([])
	const [search, setSearch] = useState('')


	const searchElements = () => {
		const elements = initialValue.filter((item) => {
			if (
				item.name.includes(search) || item.id.includes(search)
			) {
				return item
			}
		})
		setUsers(elements)
	}

	

	useEffect(() => {
		setUsers(initialValue)
		return function cleanUp() {

		}
	}, [])

	useEffect(() => {
		if (search.trim() === '') {
			setUsers(initialValue)
		}
		return function cleanUp() {

		}
	}, [search])

	const handleInputChange = (event) => {
		setSearch(event.target.value)
		searchElements()
	}

	const columns = [
		{
			name: 'No.', /* numero de entrada */
			selector: row => row.id,
			sortable: true,
		},
		{
			name: 'Fecha', /* Fecha de creado */
			selector: row => 'D/M/AA',
			sortable: true,
		},
		{
			name: 'Nombre del menor', /* Nombre completo */
			selector: row => row.name,
			sortable: true,

		},
		{
			name: 'Carnet', /* Canet de identidad */
			selector: row => '###########',
			sortable: true,

		},
		{
			name: 'Sexo', /* Masculino o Femenino */
			selector: row => 'F-M',
			sortable: true,
		},
		{
			name: 'Año', /* Año de vida */
			selector: row => '2',
			sortable: true,
		},
		{
			name: 'Nombre del tutot', /* la madre o tutor */
			selector: row => 'Fulanita Esperanceja ',
			sortable: true,
		},
		{
			name: 'Parentesco', /* madre padre o tutor */
			selector: row => 'Madre ',
			sortable: true,
		},
		{
			name: 'Organismo', /* Localidad */
			selector: row => 'No se cual',
			sortable: true,
		},
		{
			name: 'Consejo Popular', /* Consejo Popular */
			selector: row => 'Abel Santamaria',
			sortable: true,
		},
		{
			name: 'Solicitud', /* tipo de solicitud, traslado o nueva */
			selector: row => 'Nueva',
			sortable: true,
		},
		{
			name: 'Estado', /* Estado de la solicitud (1 de 4) */
			selector: row => 'propuesta',
			sortable: true,
		},
		{
			name: 'Matricula', /* circulo en el q esta propuesto o matriculado */
			selector: row => 'Ismaelillo',
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
					<button className='btn btn-danger btn-sm' 
					onClick={() => alert('CLik')}
					>
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

	return <section className='generallist'>

			<div className='container mt-3 '>
			<h2 className='text-center text-secondary mt-5 p-3'>Listado General de Planillas</h2>
			<div className='card '>
			<div className='card-body'>
			<div className='table-responsibe'>
				<div className="mb-3">
					<input type="text" className="form-control" id="search" placeholder="Busqueda" value={search} onChange={handleInputChange} />
				</div>
				<DataTable 
					columns={columns}
					data={users}
					title='Listado de Planillas'
					pagination
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
		</div>
	</section >
};

export default GeneralList;
