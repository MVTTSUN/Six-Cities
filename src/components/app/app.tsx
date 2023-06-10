import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import Code404Screen from '../../pages/code-404-screen/code-404-screen';
import type { Comment, Offer } from '../../types/types';

type AppProps = {
  offersData: Offer[];
  commentsData: Comment[];
};

function App({offersData, commentsData} : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={<MainScreen offersData={offersData} />}
          />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/favorites' element={<FavoritesScreen />} />
          <Route path='/offer/:id' element={<PropertyScreen offersData={offersData} commentsData={commentsData} />} />
        </Route>
        <Route path='*' element={<Code404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
