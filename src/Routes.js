import React from 'react'
import {Route, Routes,} from 'react-router-dom';
import Entrance from './notes/components/Entrance';
import Home from './notes/components/Home'
import Notices from './notes/components/Notices';
import Semester from './notes/components/Semester';
function SiteRoutes() {
    return (
        <Routes>
            {/* Page Routes goes here */}
            <Route path="/" element={<Home/>}/>
            <Route path="/semester" element={<Semester/>}/>
            <Route path="/entrance" element={<Entrance/>}/>
            <Route path="/notice" element={<Notices/>}/>

        </Routes>
    )
}
export default SiteRoutes