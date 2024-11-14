import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PerfumeForm from "./Componentes/PerfumeForm";
import { getPerfumes } from "./localStorage";

const App = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [editingPerfume, setEditingPerfume] = useState(null);

  useEffect(() => {
    const storedPerfumes = getPerfumes();
    setPerfumes(storedPerfumes);
  }, []);

  const handleSubmitSuccess = () => {
    const storedPerfumes = getPerfumes();
    setPerfumes(storedPerfumes);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/cadastrar-perfume"
          element={
            <PerfumeForm
              onSubmitSuccess={handleSubmitSuccess}
              editingPerfume={editingPerfume}
              setEditingPerfume={setEditingPerfume}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
