import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import CreateRecipe from "./pages/CreateRecipe";
import AllRecipes from "./pages/AllRecipes";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="main__container">
        <div className="container">
          <div className="main">
            <Menu/>
            <div className="content">
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="create-recipe" exact element={<CreateRecipe/>} />
              <Route path="create-product" exact element={<CreateProduct />} />
              <Route path="recipes" exact element={<AllRecipes />} />
              <Route path="favorites" exact element={<Favorites />} />
            </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
