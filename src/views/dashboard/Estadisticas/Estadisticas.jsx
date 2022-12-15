import './styles/Estadisticas.scss';

const Estadisticas = () => {
	return <section className='estadisticas'>

		<div className='container-main'>
        <div className="row p-5 justify-content-evenly">

        <div className="col-md-4 col-xl-4">
            <div className="card bg-c-yellow order-card">
                <div className="card-block">
                    <h5 className="m-b-20">Total de Matriculados</h5>
                    <h1 className="text-right display-1"><span>2287</span></h1>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-4">
            <div className="card bg-c-pink order-card">
                <div className="card-block">
										<h5 className="m-b-20">Total de Niñas</h5>
                    <h1 className="text-right display-1"><span>1092</span></h1>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-4">
            <div className="card bg-c-green order-card">
                <div className="card-block">
										<h5 className="m-b-20">Total de Niños</h5>
                    <h1 className="text-right display-1"><span>1195</span></h1>
                </div>
            </div>
        </div>
        
		</div>


        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header ">
                <h5 className="card-title">Niños y niñas</h5>
                <p className="card-category">matriculados en el municipio</p>
              </div>
              <div className="card-body ">
                <canvas id="chartEmail"></canvas>
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <i className="fa fa-circle text-primary"></i> Opened
                  <i className="fa fa-circle text-warning"></i> Read
                  <i className="fa fa-circle text-danger"></i> Deleted
                  <i className="fa fa-circle text-gray"></i> Unopened
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-8">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-title">NASDAQ: AAPL</h5>
                <p className="card-category">Line Chart with Points</p>
              </div>
              <div className="card-body">
                <canvas id="speedChart" width="400" height="100"></canvas>
              </div>
              <div className="card-footer">
                <div className="chart-legend">
                  <i className="fa fa-circle text-info"></i> Tesla Model S
                  <i className="fa fa-circle text-warning"></i> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check"></i> Data information certified
                </div>
              </div>
            </div>
          </div>
        </div>


		</section >;
};

export default Estadisticas;





