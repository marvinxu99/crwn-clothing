import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";
import PageNotFound from "./routes/page-not-found/page-not-found.component";
import Authentication from "./routes/authentication/authentication.component";


const Shop = () => {
  return (
    <div>
      <div>I am the shop page</div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route element={<Authentication />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
