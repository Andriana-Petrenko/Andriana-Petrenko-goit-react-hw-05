import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";




const App = () => {
  

  return (
    <><header>
      <Navigation/>
    </header>
    <main>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/movies' element={<MoviesPage/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </main>
    </>
    
  );
};
export default App


