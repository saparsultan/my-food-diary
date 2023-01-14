import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          {/* <Route path="/create-recipe" exact element={<CreateRecipe/>} />
          <Route path="/create-product" exact element={<CreateProduct />} />
          <Route path="recipes" exact element={<AllRecipes />} /> */}
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
