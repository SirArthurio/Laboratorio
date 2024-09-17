import { Suspense } from "react";
import { AppRutas } from "./Rutas";
import { BrowserRouter as Router} from "react-router-dom";

function AppContent() {
  return (
    <Suspense fallback={"cargando..."}>
      <AppRutas />
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;