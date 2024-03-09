import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

function App() {
  
  return (
    <div className="app">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  )
}

export default App
