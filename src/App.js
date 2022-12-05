import React from "react";
import AuthProvider from "./contexts/auth.context";
import MascotasApp from "./MascotasApp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <MascotasApp />
      </AuthProvider>
    </div>
  );
}

export default App;
