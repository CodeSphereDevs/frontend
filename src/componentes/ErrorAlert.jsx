/* eslint-disable react/prop-types */
import "./ErrorAlert.scss"
export default function ErrorAlert({alertMessage}) {
  return (
    <span className="alertMessage">
        {alertMessage}
    </span>
  )
}
