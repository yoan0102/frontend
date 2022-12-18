import { useFormik } from "formik"
import PropTypes from 'prop-types'
import * as Yup from 'yup';

import { useNavigate } from "react-router-dom"

import { useOrganismoContext } from "../../context/OrganismoContext"
import Button from "../../../../../common/Button/Button"
import { ORGANISMOS } from "../../../../../core/config/routes/paths"

const REQUIRED = 'Este campo es requerido';

const OrganismoSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED),
  description: Yup.string().required(REQUIRED),
  priorizado: Yup.boolean(),

});


function OrganismoForm({ organismo }) {


  const { addOrganismo } = useOrganismoContext()
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      name: organismo ? organismo?.name : '',
      description: organismo ? organismo?.name : '',
      priorizado: organismo ? organismo?.priorizado : false
    },
    onSubmit: async (values, { resetForm }) => {
      await addOrganismo.mutate({
        ...values
      })
      resetForm();
      navigate(ORGANISMOS)
    },
    // validationSchema: OrganismoSchema
  });



  return (
    <div
      id='form'
      className='container mt-3'
    >
      <h2 className='text-center text-secondary mt-5 p-3'>Nuevo Organismo</h2>
      <div className='card '>
        <div className='card-body'>
          <form onSubmit={form.handleSubmit}>

            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-md-3 mb-3">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    required
                    onChange={form.handleChange}
                    value={form.values.name}
                  />
                  {form.errors.name ? <p>{form.errors.name}</p> : null}
                </div>

                <div className="col-md-7 mb-3">

                  <label >Descripcion</label>
                  <textarea className="form-control"
                    rows={1} name="description"
                    id="description"
                    placeholder="Escriba una breve descripcion"
                    value={form.values.description}
                    onChange={form.handleChange}
                  ></textarea>
                  {form.errors.description ? <p>{form.errors.description}</p> : null}
                </div>

                <div className="col-md-2 mb-3">
                  <input
                    className="form-check-input switch-lg"
                    type="checkbox"
                    role="switch"
                    name="priorizado"
                    id="priorizado"
                    onChange={form.handleChange}
                    checked={form.priorizado}
                  />
                  <label className="form-label" htmlFor="priorizado">Priorizado</label>

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

  )
}

OrganismoForm.propTypes = {
  organismo: PropTypes.object
}

export default OrganismoForm