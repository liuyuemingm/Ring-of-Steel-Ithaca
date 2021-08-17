import React from 'react'

function Footer() {
  return (
    <div>
      <p style={{ position: "fixed", bottom: "0", width: "100%", textAlign: "center" }}>Copyright &copy; {new Date().getFullYear()} Yueming Liu</p>
    </div>
  )
}

export default Footer
