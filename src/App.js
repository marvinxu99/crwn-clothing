import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";


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
      </Route>
    </Routes>
  );
}

export default App;
