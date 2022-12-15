import { useFormik } from 'formik';
import PropTypes from 'prop-types'
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

import { useUserContext } from '../../context/UserContext';
import Button from '../../../../../common/Button/Button';
import { USERS } from '../../../../../core/config/routes/paths';

const REQUIRED = 'Este campo es requerido';

const UserSchema = Yup.object().shape({
	nick_name: Yup.string().required(REQUIRED),
	first_name: Yup.string().required(REQUIRED),
	last_name: Yup.string().required(REQUIRED),
	password: Yup.string().required(REQUIRED),
	position: Yup.string().required(REQUIRED),
	role: Yup.string().required(REQUIRED),
	
});

function UserForm({ user }) {

	const { addUser } = useUserContext();
	const navigate = useNavigate();
	const form = useFormik({
		initialValues: {
			nick_name: user ? user?.nick_name:'',
			first_name: user ? user?.first_name:'',
			last_name: user ? user?.last_name:'',
			password: user ? user?.password:'',
			position: user ? user?.position:'',
			role: user ? user?.role:'',
			/*       razon_remove: '', */
		},
		onSubmit: async (values, { resetForm }) => {
			await addUser.mutate({
				...values,
			});
			resetForm();
			navigate(USERS);
		},
		validationSchema: UserSchema
	});

	return (
		<div
			id='form'
			className='container mt-3'
		>
		<h2 className='text-center text-secondary mt-5 p-3'>Nuevo Usuario</h2>
		 <div className='card '>
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
									{form.errors.nick_name ? <p>{form.errors.nick_name}</p> : null}
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
									{form.errors.first_name ? <p>{form.errors.first_name}</p> : null}
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
									{form.errors.last_name ? <p>{form.errors.last_name}</p> : null}
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
								{form.errors.position ? <p>{form.errors.position}</p> : null}
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
									{form.errors.password ? <p>{form.errors.password}</p> : null}
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

						<article className="d-flex w-100 justify-content-center align-items-center gap-5">

              <Button severity='gray' icon={<i className="text-white bi bi-x-lg"></i>} />

              <Button type="submit" severity='primary' icon={<i className="text-white bi bi-check2"></i>} />
            </article>


					</form>
				</div>
			</div>
		</div>
	);
}

UserForm.propTypes = {
  user: PropTypes.object
}

export default UserForm;
