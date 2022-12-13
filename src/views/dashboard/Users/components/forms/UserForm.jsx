import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom';

import { useUserContext } from '../../context/UserContext';
import Button from '../../../../../common/Button/Button';
import { USERS } from '../../../../../core/config/routes/paths';

function UserForm() {
	const { addUser } = useUserContext();
	const navigate = useNavigate();
	const form = useFormik({
		initialValues: {
			nick_name: '',
			first_name: '',
			last_name: '',
			password: '',
			position: '',
			role: '',
			/*       razon_remove: '', */
		},
		onSubmit: async (values, { resetForm }) => {
			await addUser.mutate({
				...values,
			});
			resetForm();
			navigate(USERS);
		},
	});

	return (
		<div
			id='form'
			className='container mt-3'
		>
			<div className='card'>
				<div className='card-header'>
					<h3>Nuevo Usuario</h3>
				</div>
				<div className='card-body'>
					<form onSubmit={form.handleSubmit}>


						<div className='form-group'>
							<div className='row align-items-center'>
								<div className='col-md-3 mb-3'>
									<label>Usuario</label>
									<input
										type='text'
										className='form-control'
										name='nick_name'
										id='nick_name'
										placeholder='Usuario'
										required
										onChange={form.handleChange}
										value={form.values.nick_name}
									/>
								</div>

								<div className='col-md-4 mb-3'>
									<label>Nombre</label>
									<input
										type='text'
										className='form-control'
										name='first_name'
										id='first_name'
										placeholder='Nombre'
										required
                    onChange={form.handleChange}
										value={form.values.first_name}
									/>
								</div>

                <div className='col-md-5 mb-3'>
									<label>Apellidos</label>
									<input
										type='text'
										className='form-control'
										name='last_name'
										id='last_name'
										placeholder='Apellidos'
										required
                    onChange={form.handleChange}
										value={form.values.last_name}
									/>
								</div>
							</div>
						</div>

						<div className='form-group'>
            <div className='row align-items-center'>
							<div className='col-md-8 mb-3'>
								<label>Cargo</label>
								<input
									type='text'
									className='form-control'
									name='position'
									id='position'
									placeholder='Cargo que ocupa en la empresa'
									required
                  onChange={form.handleChange}
                  value={form.values.position}
								/>
							</div>

								<div className='col-md-4 mb-3 '>
									<div className='custom-control custom-radio custom-control-inline'>
										<input
											className='custom-control-input'
											type='radio'
											name='type'
											id='admin'
											value='1'
										/>
										<label className='custom-control-label'>Administrador</label>
									</div>

									<div className='custom-control custom-radio custom-control-inline'>
										<input
											className='custom-control-input'
											type='radio'
											name='type'
											id='user'
											value='2'
											checked
										/>
										<label className='custom-control-label'>Invitado</label>
									</div>
								</div>

            </div>
						</div>

	 					<div className='form-group'>
							<div className='row align-items-center'>
								<div className='col-md-4 mb-3'>
									<label>Contraseña</label>
									<input
										type='password'
										className='form-control'
										name='password'
										id='password'
										placeholder='Contraseña'
                    onChange={form.handleChange}
                    value={form.values.password}
									/>
								</div>

								<div className='col-md-4 mb-3'>
									<label>Repetir contraseña</label>
									<input
										type='password'
										className='form-control'
										name='password2'
										id='password2'
										placeholder='Repetir contraseña'
									/>
								</div>
							</div>
						</div>


						<article className='d-flex w-100 justify-content-center align-items-center gap-5'>
							<Button
								severity='gray'
								icon={<i className='text-white bi bi-x-lg'></i>}
							/>

							<Button
								type='submit'
								severity='primary'
								icon={<i className='text-white bi bi-check2'></i>}
							/>
						</article>
					</form>
				</div>
			</div>
		</div>
	);
}

export default UserForm;
