import { Footer } from '../components/Footer';
import { LoginForm } from '../components/LoginForm'

import './styles/HomeScreen.scss';
{/* <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700&display=swap" rel="stylesheet" /> */ }



const HomeScreen = () => {
  return (
    <section>
      <div className="main-home text-bg-white">
        <main className="container-fluid" style={{ minHeight: '94vh' }}>
          <div className="row ">
            <div className="col-12 col-md-6 p-7"></div>
            <div className="text-white col-12 col-md-6 p-5">
              <h1 className="text-center text-md-end text-uppercase fw-bold">OCI</h1>
              <p className="text-md-end">
                La aplicación diseñada <br />
                para ayudar con el otorgamiento <br />
                de matrículas para círculos infantiles </p>
              <h4 className="text-md-end">Dirección Municipal de Educación Isla de la Juventud</h4>

              <LoginForm />

            </div>

          </div>
        </main>
      </div>
      <Footer />
    </section>
  );
};

export default HomeScreen;
