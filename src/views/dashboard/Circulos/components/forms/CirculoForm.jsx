import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet'

import { useCirculoContext } from '../../context/CirculoContext';
import Button from '../../../../../common/Button/Button';
import { CIRCULOS } from '../../../../../core/config/routes/paths';
import LocationMaker from '../LocationMaker/LocationMaker';


const REQUIRED = 'Este campo es requerido';


const CirculoSchema = Yup.object().shape({
	no: Yup.number().required(REQUIRED),
	name: Yup.string().required(REQUIRED),
	normed_capacity2: Yup.number().required(REQUIRED),
	normed_capacity3: Yup.number().required(REQUIRED),
	normed_capacity4: Yup.number().required(REQUIRED),
	normed_capacity5: Yup.number().required(REQUIRED),
	normed_capacity6: Yup.number().required(REQUIRED),
});

function CirculoForm() {
	const { addCirculo } = useCirculoContext();
	const navigate = useNavigate();
	const form = useFormik({
		initialValues: {
			no: 0,
			name: '',
			normed_capacity2: 0,
			normed_capacity3: 0,
			normed_capacity4: 0,
			normed_capacity5: 0,
			normed_capacity6: 0,
			/*       latong: [], */
		},
		onSubmit: async (values, { resetForm }) => {
			await addCirculo.mutate({
				...values,
			});
			resetForm();
			navigate(CIRCULOS);
		},
		validationSchema: CirculoSchema

	});

	return (
		<div
			id='form'
			className='container mt-3'
		>
			<div className='card'>
				<div className='card-header'>
					<h2>Nuevo Circulo</h2>
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
									{form.errors.no ? <p>{form.errors.no}</p> : null}
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
									{form.errors.name ? <p>{form.errors.name}</p> : null}

								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row align-items-center'>
								<div className='col-md-10 mb-3'>

									<MapContainer style={{ width: '100%', height: '500px' }} center={[21.72761, -82.834167]} zoom={10} scrollWheelZoom={false}>
										<TileLayer
											attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
											url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										/>
										<LocationMaker />
									</MapContainer>
								</div>

								<div className='col-md-2 mb-3 justify-content-between'>
									<h3>Capacidad por año</h3>

									<div className='mb-2'>
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
										{form.errors.normed_capacity2 ? <p>{form.errors.normed_capacity2}</p> : null}
									</div>

									<div className='mb-2'>
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
										{form.errors.normed_capacity3 ? <p>{form.errors.normed_capacity3}</p> : null}

									</div>

									<div className='mb-2'>
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
										{form.errors.normed_capacity4 ? <p>{form.errors.normed_capacity4}</p> : null}
									</div>

									<div className='mb-2'>
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
										{form.errors.normed_capacity5 ? <p>{form.errors.normed_capacity5}</p> : null}
									</div>

									<div className='mb-2'>
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
										{form.errors.normed_capacity6 ? <p>{form.errors.normed_capacity6}</p> : null}
									</div>

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
