import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMaker from '../../../Circulos/components/LocationMaker/LocationMaker';

/* import { useNavigate } from 'react-router-dom'; */

import ParentForm from '../forms/ParentForm';

function ChildrenForm() {
	/* const { addChildren } = useChildrenContext(); */
	/* const navigate = useNavigate(); */
	const form = useFormik({
		initialValues: {
			/* noEntry: 0,
			type: '',
			social_case: '',
			motive: '', */
		},
		/* onSubmit: async (values, { resetForm }) => {
			await addChildren.mutate({
				...values,
			});
			resetForm();
			navigate(NEW_SUBMISISON);
		}, */
	});

	return (
		<div id='form'>
			<h3 className='text-center text-secondary mb-3'>Datos del menor</h3>

			<form onSubmit={form.handleSubmit}>
				<div className='form-group'>
					<div className='row align-items-center'>
						<div className='col-md-7 mb-3'>
							<label>Nombre y Apellidos</label>
							<input
								type='text'
								className='form-control'
								name='fullNameChild'
								id='fullNameChild'
							/>
						</div>

						<div className='col-md-3 mb-3'>
							<label>CI</label>
							<input
								type='text'
								className='form-control'
								name='ci'
								id='ci'
							/>
						</div>

						<div className='col-md-2 mb-3'>
							<label>Año de vida</label>
							<select
								className='form-select'
								name='year_of_life'
								id='year_of_life'
							>
								<option value='1'>2</option>
								<option value='2'>3</option>
								<option value='3'>4</option>
								<option value='4'>5</option>
								<option value='5'>6</option>
							</select>
						</div>
					</div>
				</div>

				<div className='form-group'>
					<div className='row align-items-center'>
						<div className='col-md-8 mb-3'>
							<label>Dirección</label>
							<input
								type='text'
								className='form-control'
								name='childAdress'
								id='childAdress'
							/>
						</div>

						<div className='col-md-4 mb-3'>
							<label>Localidad</label>
							<input
								type='text'
								className='form-control'
								name='locality'
								id='locality'
							/>
						</div>
					</div>
				</div>

				<div className='form-group'>
					<div className='row align-items-center'>
						<div className='col-md-4 mb-3 justify-content-between'>

							<div className='mb-5'>
								<label>Consejo Popular</label>
								<select
                 className='form-select'
									name='cPopular'
									id='cPopular'
								>
									<option value='1'>Micro 70</option>
									<option value='2'>Abel Santamaría</option>
									<option value='3'>Centro Histórico Nueva Gerona</option>
									<option value='4'>Pueblo Nuevo</option>
									<option value='5'>26 de Julio</option>
									<option value='6'>Sierra Caballos</option>
									<option value='7'>Delio Chacón</option>
									<option value='8'>Patria</option>
									<option value='9'>Centro Histórico Santa Fé</option>
									<option value='10'>Los Paneles (Santa Fe)</option>
									<option value='11'>Julio Antonio Mella (Santa Fe)</option>
									<option value='12'>Consejo Popular La Demajagua</option>
									<option value='13'>La Reforma</option>
									<option value='14'>Argelia-Victoria</option>
								</select>
							</div>

							<div className='mb-5'>
								<label>Municipio</label>
								<select
									className='form-select'
									name='Municipality'
									id='Municipality'
								>
									<option value='1'>Isla de la Juventud</option>
								</select>
							</div>

							<div className='mb-5'>
								<label>Provincia</label>
								<select
									className='form-select'
									name='Province'
									id='Province'
								>
									<option value='1'>Isla de la Juventud</option>
								</select>
							</div>
              </div>

							<div className='col-md-8 mb-3'>
								<MapContainer
									style={{ width: '100%', height: '450px' }}
									center={[21.72761, -82.834167]}
									zoom={10}
									scrollWheelZoom={true}
								>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
									/>
									<LocationMaker />
								</MapContainer>
							</div>
						</div>					
				</div>

				<div className='form-group '>
					<div className='row' >
            
          <div className='col-md-3 mb-3'></div>

						<div className='col-md-6 mb-3 d-flex'>
            <label className='col-md-6'>Seleccione el circulo para matricular</label>
            <select 
								className='form-select '
								name='circulo'
								id='circulo'
							>
								<option value='1'>seleccione</option>
							</select>
						</div>
					</div>
				</div>
				<ParentForm/>
			</form>


		</div>
	);
}

ChildrenForm.propTypes = {
	children: PropTypes.object,
};
export default ChildrenForm;
