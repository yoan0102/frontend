import { useOrganismoContext } from '../../context/OrganismoContext';
import DataTable from 'react-data-table-component'

import './styles/OrganismoList.scss';

const OrganismoList = () => {

	const { data } = useOrganismoContext()

	const columns = [
		{
			name: 'id',
			selector: row => row.id,
			sortable: true,
		},
		{
			name: 'Nombre',
			selector: row => row.name,
			sortable: true,

		},
		{
			name: 'Actions',
			cell: row =>
				<button className="btn btn-primary btn-sm"
					onClick={() => alert('CLik')}
				>Editar</button>
			,
			allowOverflow: true,
			button: true,
			width: '56px',
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

		</section>
	)
};

export default OrganismoList;
