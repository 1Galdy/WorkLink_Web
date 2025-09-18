import { useState } from "react";

// Style css
import '../styles/PolitiqueHook.css';
// import '../../../style/Responsive.css';

// Mes Screens
import InnovationScreen from "../screens/InnovationScreen";
import SecurityScreen from "../screens/SecurityScreen";
import PerformanceScreen from "../screens/PerformanceScreen";
import SupportScreen from "../screens/SupportScreen";

export default function PolitiqueHook() {
  const [onglet, setOnglet] = useState("Innovation");

  const renderScreen = () => {
    switch (onglet) {
      case "Innovation":
        return <InnovationScreen />;
      case "Sécurité":
        return <SecurityScreen />;
      case "Performance":
        return <PerformanceScreen />;
      case "Support":
        return <SupportScreen />;
      default:
        return <InnovationScreen />;
    }
  }; 

  return (
    <div className="containerPolitique">
      <NavPolitique onglet={onglet} setOnglet={setOnglet} />
      {renderScreen()}
    </div>
  );
}

// Composant de navigation des onglets
function NavPolitique({ onglet, setOnglet }) {
  return (
    <div className="containerPolitiqueOnglets">
      <div className="onglets">
        <button
          className={`btn-tab ${onglet === "Innovation" ? "active" : ""}`}
          onClick={() => setOnglet("Innovation")}
        >
          Innovation
        </button>
        <button
          className={`btn-tab ${onglet === "Sécurité" ? "active" : ""}`}
          onClick={() => setOnglet("Sécurité")}
        >
          Sécurité
        </button>
        <button
          className={`btn-tab ${onglet === "Performance" ? "active" : ""}`}
          onClick={() => setOnglet("Performance")}
        >
          Performance
        </button>
        <button
          className={`btn-tab ${onglet === "Support" ? "active" : ""}`}
          onClick={() => setOnglet("Support")}
        >
          Support
        </button>
      </div>
    </div>
  );
}
