import { useLocation } from "react-router-dom";

function Alert() {
  const location = useLocation();

  if (location.state && location.state.alert) {
    return (
      <div className={`alert alert-${location.state.alert.class}`} role="alert">
        {location.state.alert.message}
      </div>
    )
  }
}

export default Alert;