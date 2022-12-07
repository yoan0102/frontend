import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormCirculos } from './components';
import './styles/Circulos.scss';
// import { useNavigate } from 'react-router-dom';


const REQUIRED = 'Este campo es requerido';

const SignupSchema = Yup.object().shape({
  no: Yup.number().required(REQUIRED),
  name: Yup.string().required(REQUIRED),
  capacidad_total: Yup.number().required(REQUIRED),
  normed_capacity2: Yup.number().required(REQUIRED),
  normed_capacity3: Yup.number().required(REQUIRED),
  normed_capacity4: Yup.number().required(REQUIRED),
  normed_capacity5: Yup.number().required(REQUIRED),
  normed_capacity6: Yup.number().required(REQUIRED),
})
const initialValues = {
  no: 0,
  name: '',
  capacidad_total: 0,
  normed_capacity2: 0,
  normed_capacity3: 0,
  normed_capacity4: 0,
  normed_capacity5: 0,
  normed_capacity6: 0,
}

const Circulos = () => {
  return (
    <section className="main-home-sub">
      <div className="card-header col-12 container"><br /><br />
        <div className="card-body col-12 submision container justify-content-between">

          <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
              alert(values);
              // try {
              //   const circulos = await circulosContext?.createCirculos({ circulos: values });
              //   if (circulos) {
              //     notification.getSuccess('Circulo Guardado');
              //   }
              //   actions.setSubmitting(false);
              // } catch (error) {
              //   notification.getError('Ocurrio un error intentalo mas tarde');
              //   actions.setSubmitting(false);
              // }
            }}
            validationSchema={SignupSchema}
          >
            {({ values, handleSubmit, isSubmitting }) => (

              <form onSubmit={handleSubmit}>
                <section className="container mb-5">
                  <div className="card-body">

                    <article className='mb-5'>
                      <FormCirculos values={values} />
                    </article>

                    <article className="d-flex w-100 justify-content-center align-items-center gap-5">

                      <button type="button" className="btn btn-secondary btn-lg" >
                        <i className="text-white bi bi-x-lg"></i>
                      </button>

                      <button type="submit" className="btn btn-primary btn-lg">
                        <i className="text-white bi bi-check2"></i>
                      </button>
                    </article>

                  </div>
                </section>




              </form>
            )}
          </Formik>

        </div>
      </div>
      <div className="card-footer col-12 container"><br /><br />
      </div>
      <div className="col-12 container justify-content-between text-white">AQUI VA EL LISTADO DE TODOS LOS CIRCULOS Y SUS DATOS UN DATATABLE
      </div>
    </section>
  );
};

export default Circulos;
