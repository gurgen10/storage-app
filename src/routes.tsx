import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from "./components/Layout"
import { LocalStorage } from './pages/LocalStorage';
import { SessionStorage } from './pages/SessionStorage';
import { Cookies } from './pages/Cookies';
import { IndexedDB } from './pages/IndexedDB';
import Introduction from './pages/Introduction';
import IndexedDBExample from './pages/IndexedDB/IndexedDBExample';

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3 style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>404 page not found.</p>
        No match for <code>{location.pathname}</code>.
      </h3>
    </div>
  );
}

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" Component={Introduction} />
        <Route path='/local-storage' Component={LocalStorage}  />
        <Route path='/session-storage' Component={SessionStorage} />
        <Route path='/cookies' Component={Cookies} />
        <Route path='/indexed-db' Component={IndexedDB} />
        <Route path='/indexed-db/example' Component={IndexedDBExample} />
        <Route path='*' Component={NoMatch} />
      </Routes>
    </MainLayout>
  )
}

export default MainRoutes;
