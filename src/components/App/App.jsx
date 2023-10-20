import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="Catalog" element={<CatalogPage />}></Route>
        <Route path="Favorite" element={<FavoritesPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
