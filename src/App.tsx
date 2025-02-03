import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./Component/Acceuil";
import ActionSynchro from "./Component/ActionSynchro";
import DetailPlainte from "./Component/ActionSynchro/DetailSynchro";
import Demande from "./Component/Demande";
import DemandeUpdate from "./Component/Demande/UpdateDemande";
import Documentation from "./Component/Documentation";
import Login from "./Component/Login/Login";
import Mesactions from "./Component/MesAction";
import ShowClient from "./Component/MesAction/Client";
import Paquet from "./Component/Paquet";
import Profil from "./Component/Profil";
import Recherche from "./Component/Recherche";
import Servey from "./Component/Servey";
import ServeyReponse from "./Component/Servey/Repondre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/operation" element={<Acceuil />} />
        <Route path="/paquet" element={<Paquet />} />
        <Route path="/demande" element={<Demande />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/servey" element={<Servey />} />
        <Route path="/servey/reponse/:id" element={<ServeyReponse />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/action" element={<ActionSynchro />} />
        <Route path="/info" element={<DetailPlainte />} />
        <Route path="/update" element={<DemandeUpdate />} />
        <Route path="/mesactions" element={<Mesactions />} />
        <Route path="/showclient" element={<ShowClient />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
