import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./scenes/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Dashboard from "./scenes/dashboard";
import  Booking from "./scenes/booking";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import GalleryPage from "./scenes/gallery";
import Event from "./scenes/event";
import EventDetails from "./scenes/EventDetails"; // الصفحة لعرض تفاصيل الحدث
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//import { Calendar } from "lucide-react";
import Calendarpage from "./scenes/calendar";

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
              <Route path="/team" element={< Booking />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calender" element={<Calendarpage />} />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/event" element={<Event />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </Router>  );}
export default App;