// import { useOrganismoContext } from "../../context/OrganismoContext"

import Button from "../../../../../common/Button/Button"

function OrganismoForm() {

  // const { addOrganismo } = useOrganismoContext()
  return (
    <div id="form" className="container mt-3">
      <div className="card">
        <div className="card-header"><h3>Nuevo Organismo</h3></div>
        <div className="card-body">
          <form>

            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-md-3 mb-3">


                  <label>Nombre</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Nombre" required />
                </div>

                <div className="col-md-7 mb-3">

                  <label >Descripcion</label>
                  <textarea className="form-control" rows={1} name="description" id="description" placeholder="Escriba una breve descripcion"></textarea>
                </div>

                <div className="col-md-2 mb-3">

                  <input className="form-check form-switch" type="checkbox" role="switch" name="priorizado" id="priorizado" />
                  <label className="custom-control-label">Priorizado</label>
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

export default OrganismoForm