import "./App.css";
import SideBar from "./Sidemenu";
import Dashboard from "../Compos/Dashboard";
import Calender from "../Compos/Calender";
import Chat from "../Compos/Chat.jsx";
import CRM from "../Compos/CRM.jsx";
import Ecommerce from "../Compos/Ecommerce.jsx";
import Email from "../Compos/Email.jsx";
import Projects from "../Compos/Projects.jsx";
import SocialFeed from "../Compos/SocialFeed.jsx";
import Tasks from "../Compos/tasks.jsx";
import FileManager from "../Compos/FileManager.jsx";
import Pages from "../Compos/Pages.jsx";
import Landing from "../Compos/Landing.jsx";
import Layouts from "../Compos/Layouts.jsx";
import BaseUI from "../Compos/baseui.jsx";
import ExtendedUI from "../Compos/Extendedui.jsx";
import Widgets from "../Compos/widgets.jsx";
import Icons from "../Compos/icons.jsx";
import Forms from "../Compos/forms.jsx";
import Charts from "../Compos/charts.jsx";
import Tables from "../Compos/tables.jsx";
import Maps from "../Compos/Maps.jsx";
import MultiLevel from "../Compos/MultiLevel.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Router1() {
    return (
      <>
        <Router>
          <SideBar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/crm" element={<CRM />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/email" element={<Email />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/socialfeed" element={<SocialFeed />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/filemanager" element={<FileManager />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/layouts" element={<Layouts />} />
              <Route path="/baseui" element={<BaseUI />} />
              <Route path="/extendedui" element={<ExtendedUI />} />
              <Route path="/widgets" element={<Widgets />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/multilevel" element={<MultiLevel />} />
            </Routes>
          </SideBar>
  
        </Router>
      </>
    );
  }
  
  export default Router1;
  