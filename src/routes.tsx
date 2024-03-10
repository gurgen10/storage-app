import { Route, Routes } from 'react-router-dom';

import MainLayout from "./components/Layout"
import { LocalStorage } from './pages/LocalStorage';
import { SessionStorage } from './pages/SessionStorage';
import { Cookies } from './pages/Cookies';
import { IndexDB } from './pages/IndexDB';
import Introduction from './pages/Introduction';
import IndexDBExample from './pages/IndexDB/IndexDBExample';


const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" Component={Introduction} />
        <Route path='/local-storage' Component={LocalStorage}  />
        <Route path='/session-storage' Component={SessionStorage} />
        <Route path='/cookies' Component={Cookies} />
        <Route path='/index-db' Component={IndexDB} />
        <Route path='/index-db/example' Component={IndexDBExample} />
      </Routes>
    </MainLayout>
  )
}

export default MainRoutes;