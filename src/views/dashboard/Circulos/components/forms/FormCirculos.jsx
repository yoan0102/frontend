import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

import './styles/FormCirculos.scss'




const FormCirculos = ({ values }) => {
  return (

    <div className="container">
      <div className="card-header">
        <h3 className="text-center">Nuevo Circulo</h3>
      </div>

      <div className="row gap-5">
        <section className='col-12 col-md-8' >
          <div className="d-flex justify-content-between gap-2">
            <article className='mb-3'>
              <label className="form-label">
                Numero:
              </label>
              <Field
                className="form-control"
                type="text"
                name="no"
                id="no"
                value={values.no}
              />
              <ErrorMessage name="no" component="p" className="text-danger" />
            </article>


            <div className='mb-2 w-100'>
              <label className="form-label">
                Nombre del circulo
              </label>
              <Field
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder=" Nombre del circulo"
                value={values.name}
              />
              <ErrorMessage name="name" component="p" className="text-danger" />
            </div>
          </div>


          <label className="form-label">
            Ubicacion
          </label>
          <textarea className="form-control"></textarea>
        </section>

        <section className='col-12 col-md-2' >
          <label className="form-label ">
            Capacidad 2do
            <Field
              className="form-control"
              type="number"
              name="normed_capacity2"
              id="normed_capacity2"
              placeholder=" #"
              value={values.normed_capacity2}
            />
            <ErrorMessage name="normed_capacity2" component="p" className="text-danger" />
          </label>

          <label className="form-label">
            Capacidad 3ro
            <Field
              className="form-control"
              type="number"
              name="normed_capacity3"
              id="normed_capacity3"
              placeholder=" #"
              value={values.normed_capacity3}
            />
            <ErrorMessage name="normed_capacity3" component="p" className="text-danger" />
          </label>

          <label className="form-label">
            Capacidad 4to
            <Field
              className="form-control"
              type="number"
              name="normed_capacity4"
              id="normed_capacity4"
              placeholder=" #"
              value={values.normed_capacity4}
            />
            <ErrorMessage name="normed_capacity4" component="p" className="text-danger" />
          </label>

          <label className="form-label">
            Capacidad 5to
            <Field
              className="form-control"
              type="number"
              name="normed_capacity5"
              id="normed_capacity5"
              placeholder=" #"
              value={values.normed_capacity5}
            />
            <ErrorMessage name="normed_capacity5" component="p" className="text-danger" />
          </label>

          <label className="form-label">
            Capacidad 6to
            <Field
              className="form-control"
              type="number"
              name="normed_capacity6"
              id="normed_capacity6"
              placeholder=" #"
              value={values.normed_capacity6}
            />
            <ErrorMessage name="normed_capacity6" component="p" className="text-danger" />
          </label>
        </section>
      </div>

    </div>
  );
};

FormCirculos.propTypes = {
  values: PropTypes.object
}

export default FormCirculos;