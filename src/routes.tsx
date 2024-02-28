import { Route, Routes } from 'react-router-dom';

import MainLayout from "./components/Layout"
import { LocalStorage } from './pages/LocalStorage';
import { SessionStorage } from './pages/SessionStorage';
import { Cookies } from './pages/Cookies';
import { IndexDB } from './pages/IndexDB';
import Introduction from './pages/Introduction';


const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path='/local-storage' element={<LocalStorage />}  />
        <Route path='/session-storage' element={<SessionStorage />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/index-db' element={<IndexDB />} />
      </Routes>
    </MainLayout>
  )
}

export default MainRoutes;