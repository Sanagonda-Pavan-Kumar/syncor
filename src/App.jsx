import './App.css';
import ScrollToTop from "./ScrollToTop";
import { Header } from './Header';
import { BodyComp } from './BodyComp';
import { AboutusComp } from './AboutusComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CareersComp } from './CareersComp';
import { TechnologyComp } from './TechnologyComp';
import { ContactUsComp } from './ContactUsComp';
import './App.css'
import { ITtrainingComp } from './ITtrainingComp';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { AppdevComp } from './AppdevComp';
import { ProjMgmComp } from './ProjMgmComp';
import {ManagedServices} from './ManagedServices';
import { ITStaffAugComp } from './ITStaffAugComp';
function App() {
    return (
        <Suspense fallback ={<Loader/>}>
        <Router>
        <ScrollToTop />
            
            <Header />
          
            <Routes>
                <Route path="/" element={<BodyComp />} /> 
                <Route path="/aboutusComp" element={<AboutusComp />} /> 
                <Route path="/CareersComp" element={<CareersComp />} /> 
                <Route path="/TechnologyComp" element={<TechnologyComp />} />
                <Route path="/ContactUsComp" element={<ContactUsComp />} /> 
                <Route path="/ITtrainingComp" element={<ITtrainingComp />} />
                <Route path="/AppdevComp" element={<AppdevComp />} />
                <Route path="/ProjMgmComp" element={<ProjMgmComp />} />
                <Route path="/ManagedServices" element={<ManagedServices />} />
                <Route path="/ITStaffAugComp" element={<ITStaffAugComp/>}/> 
               

            </Routes>
        </Router>

        </Suspense>
    );
}

export default App;
