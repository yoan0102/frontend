import Navbar from "../../../common/Navbar/Navbar"
import PropTypes from 'prop-types'




function DashboardLayout({ children }) {
  return (

    <>
      <div className="main-b">
      <Navbar />
      <div className='container-main'>{children}</div>
      </div>
    </>
  )
}


DashboardLayout.propTypes = {
  children: PropTypes.object
}

export default DashboardLayout