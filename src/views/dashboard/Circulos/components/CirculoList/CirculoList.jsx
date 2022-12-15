import { useState, useEffect } from 'react';
import { useCirculoContext } from '../../context/CirculoContext';

import DataTable from 'react-data-table-component';

import './styles/CirculoList.scss';
import CirculoForm from '../forms/CirculoForm';

const CirculoList = () => {
	const { circulos, deleteCirculo } = useCirculoContext()

	const [circulosLocal, setCirculosLocal] = useState([])
	const [search, setSearch] = useState('')
	const [circuloUpdate, setcirculoUpdate] = useState(null)

	useEffect(() => {
		setCirculosLocal(circulos)
		return function cleanUp() {
		}
	}, [circulos])

	useEffect(() => {
		if (search.trim() === '') {
			setCirculosLocal(circulos)
		}
		return function cleanUp() {

		}
	}, [search])

	const searchElements = () => {
		const elements = circulosLocal.filter((item) => {
			if (
				item.no.includes(search) || item.name.includes(search)
			) {
				return item
			}

			return undefined
		})
		setCirculosLocal(elements)
	}

	const handleInputChange = (event) => {
		setSearch(event.target.value)
		searchElements()
	}

	const deleteCirculoId = async (circuloId) => {
		await deleteCirculo.mutate(circuloId)

	}

	const editCirculo = async (circuloId) => {
		const circulo = await circulos.filter(item => item._id === circuloId)
		setcirculoUpdate(circulo[0])
	}

	const columns = [
		{
			name: 'No.',
			selector: row => row.no,
			sortable: true,
		},
		{
			name: 'Nombre del circulo',
			selector: row => row.name,
			sortable: true,
		},
		{
			name: 'Cap-2',
			selector: row => row.normed_capacity2,
			sortable: true,
		},
		{
			name: 'Cap-3',
			selector: row => row.normed_capacity3,
			sortable: true,
		},
		{
			name: 'Cap-4',
			selector: row => row.normed_capacity4,
			sortable: true,
		},
		{
			name: 'Cap-5',
			selector: row => row.normed_capacity5,
			sortable: true,
		},
		{
			name: 'Cap-6',
			selector: row => row.normed_capacity6,
			sortable: true,
		},
/* Actions */
		{
			name: '',
			cell: row => (
				<div className='d-flex gap-1 justify-content-center'>
					<a href='#form' className="btn text-white btn-sm"
						onClick={() => editCirculo(row._id)}
					>
						<i className="action-btn bi bi-pencil-square"></i>
					</a>
					<button onClick={() => deleteCirculoId(row._id)} className='btn btn-sm'>
						<i className="action-btn bi bi-trash-fill"></i>
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
		<section className='circulolist'>


			<div className='container-main mt-3'>
			<h2 className='text-center text-secondary mt-5 p-3'>Listado de Circulos</h2>
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
						data={circulosLocal}
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
			<CirculoForm circulo={circuloUpdate}/>
			</div>

		</section>
	)
};

export default CirculoList;
