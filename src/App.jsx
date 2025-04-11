import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Topbar from "./scenes/global/Topbar";
import Header from "./components/Header";
import Sidebar from "./scenes/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Event from "./scenes/event";
import EventDetails from "./scenes/EventDetails"; // الصفحة لعرض تفاصيل الحدث
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Calendar } from "lucide-react";
//import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Router>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: "flex", height: "100vh" }}>
        <ProSidebarProvider>
        <Sidebar isSidebar={isSidebar} />
         {/* باقي محتوى الصفحة */}
         </ProSidebarProvider>

       <main className="content" style={{ flex: 1, overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Calendar />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Event />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </Router>  );}
export default App;