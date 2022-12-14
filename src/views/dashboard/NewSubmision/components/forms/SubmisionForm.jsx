import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom';

import { useSubmisionContext } from '../../context/SubmisionContext.jsx';
import Button from '../../../../../common/Button/Button';
import { NEW_SUBMISISON } from '../../../../../core/config/routes/paths';

function SubmisionForm() {
	const { addSubmision } = useSubmisionContext();
	const navigate = useNavigate();
	const form = useFormik({
		initialValues: {
			noEntry: 0,
			type: '',
			social_case: '',
			motive: '',
		},
		onSubmit: async (values, { resetForm }) => {
			await addSubmision.mutate({
				...values,
			});
			resetForm();
			navigate(NEW_SUBMISISON);
		},
	});

	return (
		<div
			id='form'
			className='container mt-3'
		>
		<h2 className='text-center text-secondary mt-5 p-3'>Nueva Solicitud</h2>
		 <div className='card '>
		 		<div className='card-body'>
					<form onSubmit={form.handleSubmit}>
						<div className='form-group '>
							<div className='row align-items-center'>
								<div className='col-md-3 mb-3'>
									<input
										type='text'
										className='form-control'
										name='os_om'
										id='os_om'
										placeholder='BOTON OS/OM'
									/>
								</div>

								<div className='col-md-4 mb-3'>
									<div>
										<div className='form-check form-check-inline'>
											<input
												className='form-check-input'
												type='radio'
												name='new'
												id='new'
												value='1'
												
											/>
											<label className='form-check-label'>Nueva Solicitud</label>
										</div>
										<div className='form-check form-check-inline'>
											<input
												className='form-check-input'
												type='radio'
												name='traslado'
												id='traslado'
												value='2'
											/>
											<label className='form-check-label'>Traslado</label>
										</div>
									</div>
								</div>

								<div className='col-md-3 mb-3'>
									<div>
										<div className='custom-control custom-switch custom-control-inline'>
											<input
												className='custom-control-input'
												type='checkbox'
												name='socialCase'
												id='socialCase'
												value='1'
											/>
											<label className='custom-control-label'>Caso Social</label>
										</div>
									</div>
								</div>

								<div className='col-md-2 mb-3'>
									<label>No. Entrada</label>
									<input
										type='number'
										className='form-control'
										name='entry'
										id='entry'
									/>
								</div>
							</div>
						</div>

						<p>ChildrenForm</p>
						<p>ParentForm</p>
{/* 						<ChildrenForm/>
						<ParentForm/> */}

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

export default SubmisionForm;
