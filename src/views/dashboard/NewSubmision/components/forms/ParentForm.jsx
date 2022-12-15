import { useFormik } from 'formik';
import PropTypes from 'prop-types';

function ParentForm() {
	const form = useFormik({
		initialValues: {},
	});

	return (
		<div id='form'>
			<h3 className='text-center text-secondary mb-3'>Datos del padre 1</h3>
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
							<label>Prentesco</label>
							<select className='form-select'>
								<option value='1'>Madre</option>
								<option value='1'>Padre</option>
								<option value='1'>Tutor</option>
							</select>
						</div>

						<div className='col-md-2 mb-3'>
							<div className='custom-control custom-switch custom-control-inline'>
								<input
									className='form-check-input switch-lg'
									type='checkbox'
									role='switch'
									name='social_case'
									id='social_case'
								/>
								<label
									className='form-label'
									htmlFor='social_case'
								>
									Monoparental
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className='form-group'>
					<div className='row align-items-center'>
						<div className='col-md-2 mb-3'>
							<div className='custom-control custom-switch custom-control-inline'>
								<input
									className='form-check-input switch-lg'
									type='checkbox'
									role='switch'
									name='social_case'
									id='social_case'
								/>
								<label
									className='form-label'
									htmlFor='social_case'
								>
									Convive
								</label>
							</div>
						</div>

						<div className='col-md-7 mb-3'>
							<label>Dirección</label>
							<input
								type='text'
								className='form-control'
								name='adress'
								id='adress'
							/>
						</div>

						<div className='col-md-3 mb-3'>
							<label>Telefono</label>
							<input
								type='text'
								className='form-control'
								name='phoneNumber'
								id='phoneNumber'
							/>
						</div>
					</div>
				</div>

				<div className='form-group'>
					<div className='row align-items-center'>

						<div className='col-md-4 mb-3 d-flex justify-content-evenly'>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='flexRadioDefault'
									id='flexRadioDefault1'
									checked
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadioDefault1'
								>
									Trabajador
								</label>
							</div>

							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='flexRadioDefault'
									id='flexRadioDefault2'
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadioDefault2'
								>
									Jubilado
								</label>
							</div>

							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='flexRadioDefault'
									id='flexRadioDefault2'
								/>
								<label
									className='form-check-label'
									htmlFor='flexRadioDefault2'
								>
									Asistenciado
								</label>
							</div>
						</div>

						<div className='col-md-8 mb-3'>
							<label>Nombre del centro de trabajo</label>
							<input
								type='text'
								className='form-control'
								name='work'
								id='work'
							/>
						</div>
					</div>
				</div>

				<div className='form-group'>
					<div className='row align-items-center'>
						<div className='col-md-9 mb-3'>
							<label>Dirección del centro de trabajo</label>
							<input
								type='text'
								className='form-control'
							/>
						</div>

						<div className='col-md-3 mb-3'>
							<label>Organismo</label>
							<select
								className='form-select'
								name='organismo'
								id='organismo'
							>
								<option value='1'>Seleccione</option>
							</select>
						</div>

						<div className='form-group'>
							<div className='row align-items-center'>
								<div className='col-md-8 mb-3'>
									<label>Cargo</label>
									<input
										type='text'
										className='form-control'
										name='cargo'
										id='cargo'
									/>
								</div>

								<div className='col-md-2 mb-3'>
									<label>Horario</label>
									<input
										type='text'
										className='form-control'
										name='horario'
										id='horario'
									/>
								</div>

								<div className='col-md-2 mb-3'>
									<label>Salario</label>
									<input
										type='number'
										className='form-control'
										name='salary'
										id='salary'
									/>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row align-items-center'>
								<div className='col-md-3 mb-3'>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											value='1'
										/>
										<label className='form-check-label'>
											Tiene otros niños en circulo infantil
										</label>
									</div>
								</div>

								<div className='col-md-2 mb-3'>
									<label>Cantidad</label>
									<input
										type='text'
										className='form-control'
									/>
								</div>

								<div className='col-md-3 mb-3'>
								<label>Nombre del centro</label>
									<select className='form-select'>
										<option value='1'>Seleccione</option>
									</select>
								</div>

								<div className='col-md-4 mb-3'>
									<div>
										<div className='form-check form-check-inline'>
											<input
												className='form-check-input'
												type='checkbox'
												value='1'
											/>
											<label className='form-check-label'>Embarazada</label>
										</div>
										<div className='form-check form-check-inline'>
											<input
												className='form-check-input'
												type='checkbox'
												value='2'
											/>
											<label className='form-check-label'>Estudiante</label>
										</div>
										<div className='form-check form-check-inline'>
											<input
												className='form-check-input'
												type='checkbox'
												value='3'
											/>
											<label className='form-check-label'>Hipoacusica</label>
										</div>
									</div>
								</div>

								</div>
								</div>

					</div>
				</div>
				<h3 className='text-center text-secondary mt-3 mb-3'>Datos del padre 2</h3>
			</form>
		</div>
	);
}

ParentForm.propTypes = {
	parent: PropTypes.object,
};

export default ParentForm;
