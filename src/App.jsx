import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import PrivacyPolicy from "./pages/Help/PrivacyPolicy";
import TermsOfService from "./pages/Help/TermsOfService";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </>
  );
}
