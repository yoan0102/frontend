import Navbar from "../../../common/Navbar/Navbar"
import PropTypes from 'prop-types'




function DashboardLayout({ children }) {
  return (

    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}


DashboardLayout.propTypes = {
  children: PropTypes.object
}

export default DashboardLayout