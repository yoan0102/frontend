import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom';

import { useSubmisionContext } from '../../context/SubmisionContext.jsx';
import Button from '../../../../../common/Button/Button';
import { NEW_SUBMISISON } from '../../../../../core/config/routes/paths';

import ChildrenForm from '../forms/ChildrenForm';

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

								<div className='col-md-4 mb-3 d-flex justify-content-evenly'>

									<div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Nueva Solicitud
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Traslado
                      </label>
                    </div>

								</div>

								<div className='col-md-3 mb-3'>
										<div className='custom-control custom-switch custom-control-inline'>
											<input
												className='form-check-input switch-lg'
												type='checkbox'
												role='switch'
												name='social_case'
												id='social_case'
											/>
											<label className='form-label' htmlFor='social_case'>Caso Social</label>
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


						<ChildrenForm/>
	
						<div className='col-md-12 mb-3'>
							<label>Motivo de solicitud</label>
							<textarea
								className='form-control'
								rows={2}
							>
								{' '}
							</textarea>
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

export default SubmisionForm;
