import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./pages";

interface Props {}

const App: React.FC<Props> = (props): JSX.Element => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
