import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./Component/Acceuil";
import AccountManager from "./Component/AccountManager";
import DashboardIndex from "./Component/AccountManager/Dashboard";
import ActeEngagement from "./Component/ActeEngagement";
import ActionSynchro from "./Component/ActionSynchro";
import DetailPlainte from "./Component/ActionSynchro/DetailSynchro";
import DemandeActeEngagement from "./Component/Demande/ActeEngagement";
import TypeDemande from "./Component/Demande/TypeDemande";
import Demande from "./Component/Demande/VisiteMenage";
import DemandeUpdate from "./Component/Demande/VisiteMenage/UpdateDemande";
import Documentation from "./Component/Documentation";
import Login from "./Component/Login/Login";
import Mesactions from "./Component/MesAction";
import Paquet from "./Component/Paquet";
import Profil from "./Component/Profil";
import Recherche from "./Component/Recherche";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/operation" element={<Acceuil />} />
        <Route path="/paquet" element={<Paquet />} />
        <Route path="/demande" element={<Demande />} />
        <Route
          path="/demande_acteengagement"
          element={<DemandeActeEngagement />}
        />
        <Route path="/type_demande" element={<TypeDemande />} />

        <Route path="/documentation" element={<Documentation />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/action" element={<ActionSynchro />} />
        <Route path="/info" element={<DetailPlainte />} />
        <Route path="/update" element={<DemandeUpdate />} />
        <Route path="/mesactions" element={<Mesactions />} />
        <Route path="/account_manager" element={<DashboardIndex />} />
        <Route path="/account_client" element={<AccountManager />} />
        <Route path="/acte_engagement" element={<ActeEngagement />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
