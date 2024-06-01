/* eslint-disable react/prop-types */
import "./ErrorAlert.css"
export default function ErrorAlert({alertMessage}) {
  return (
    <span className="alertMessage">
        {alertMessage}
    </span>
  )
}
