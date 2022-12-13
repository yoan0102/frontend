import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom';

import { useCirculoContext } from '../../context/CirculoContext';
import Button from '../../../../../common/Button/Button';
import { CIRCULOS } from '../../../../../core/config/routes/paths';

function CirculoForm() {
	const { addCirculo } = useCirculoContext();
	const navigate = useNavigate();
	const form = useFormik({
		initialValues: {
			no: '',
			name: '',
			normed_capacity2: '',
			normed_capacity3: '',
			normed_capacity4: '',
			normed_capacity5: '',
			normed_capacity6: '',
			/*       latong: [], */
		},
		onSubmit: async (values, { resetForm }) => {
			await addCirculo.mutate({
				...values,
			});
			resetForm();
			navigate(CIRCULOS);
		},
	});

	return (
		<div
			id='form'
			className='container mt-3'
		>
			<div className='card'>
				<div className='card-header'>
					<h3>Nuevo Circulo</h3>
				</div>
				<div className='card-body'>
					<form onSubmit={form.handleSubmit}>
						<div className='form-group'>
							<div className='row align-items-center'>
								<div className='col-md-2 mb-3'>
									<label>No.</label>
									<input
										type='number'
										className='form-control'
										name='no'
										id='no'
										placeholder='#'
										required
										onChange={form.handleChange}
										value={form.values.no}
									/>
								</div>

								<div className='col-md-10 mb-3'>
									<label>Nombre</label>
									<input
										type='text'
										className='form-control'
										name='name'
										id='name'
										placeholder='Nombre del círculo'
										required
										onChange={form.handleChange}
										value={form.values.name}
									/>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row align-items-center'>
								<div className='col-md-10 mb-3'>
									<label>Ubicación</label>
									<div
										id='map'
										/* required
                    onChange={form.handleChange}
                    value={form.values.latong} */
										style={{ height: 400, width: 1000, backgroundColor: 'gray' }}
									></div>
								</div>

								<div className='col-md-2 mb-3 justify-content-between'>
									<label>Capacidad por año</label>

									<label>2do año</label>
									<input
										type='number'
										className='form-control'
										name='normed_capacity2'
										id='normed_capacity2'
										required
										onChange={form.handleChange}
										value={form.values.normed_capacity2}
									/>

									<label>3er año</label>
									<input
										type='number'
										className='form-control'
										name='normed_capacity3'
										id='normed_capacity3'
										required
										onChange={form.handleChange}
										value={form.values.normed_capacity3}
									/>

                  <label>4to año</label>
									<input
										type='number'
										className='form-control'
										name='normed_capacity4'
										id='normed_capacity4'
										required
										onChange={form.handleChange}
										value={form.values.normed_capacity4}
									/>

									<label>5to año</label>
									<input
										type='number'
										className='form-control'
										name='normed_capacity5'
										id='normed_capacity5'
										required
										onChange={form.handleChange}
										value={form.values.normed_capacity5}
									/>

                  <label>6to año</label>
									<input
										type='number'
										className='form-control'
										name='normed_capacity6'
										id='normed_capacity6'
										required
										onChange={form.handleChange}
										value={form.values.normed_capacity6}
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

export default CirculoForm;
