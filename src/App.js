import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen"
import DetailScreen from "./components/detailComponents/DetailScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="newRecipe" element={<NewRecipeScreen />} />
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      {/* This is where you will code for some of Part 1. */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
