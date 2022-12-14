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
	noEntry: Yup.number().required(REQUIRED),
	type: Yup.string().required(REQUIRED),
	social_case: Yup.boolean(),
	motive: Yup.string(),
	children: Yup.object().shape({
		nameChildren: Yup.string().required(REQUIRED),
		lastNameChildren: Yup.string().required(REQUIRED),
		lastNameChildren2: Yup.string(),
		noIdentity: Yup.number()
			.test('len', 'EL carnet de identidad necesita 11 digitos', (val) => val?.toString().length === 11)
			.required(REQUIRED),
		age: Yup.number(),
		year_of_life: Yup.number().required(REQUIRED),
		sex: Yup.string(),
		street: Yup.string().required(REQUIRED),
		between: Yup.string(),
		house: Yup.string(),
		stair: Yup.string(),
		locality: Yup.string().required(REQUIRED),
		cPopular: Yup.string().required(REQUIRED),
		municipality: Yup.string().required(REQUIRED),
		province: Yup.string(),
		parents: Yup.object().shape({
			fullNameParent: Yup.string().required(REQUIRED),
			uniqueParent: Yup.boolean(),
			addressParent: Yup.string(),
			phoneNumberParent: Yup.string().required(REQUIRED),
			typeParent: Yup.string().required(REQUIRED),
			occupation: Yup.array().required(REQUIRED),
			convivencia: Yup.boolean(),
			work: Yup.string().required(REQUIRED),
			workAddress: Yup.string().required(REQUIRED),
			workPosition: Yup.string(),
			organismo: Yup.string().required(REQUIRED),
			workPhoneParent: Yup.string(),
			horario: Yup.string(),
			salary: Yup.number(),
			otherChildren: Yup.boolean(),
			cantOtherChildren: Yup.number(),
			ciOtherChildren: Yup.string(),
			pregnant: Yup.boolean(),
			student: Yup.boolean(),
			deaf: Yup.boolean(),
		}),
	}),
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

									<MapContainer style={{ width: '100%', height: '500px' }} center={[21.72761, -82.834167]} zoom={10} scrollWheelZoom={false}>
										<TileLayer
											attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
											url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										/>
										<LocationMaker />
									</MapContainer>
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
