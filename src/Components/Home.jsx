
import { useState } from "react";
import Menu from "./Menu";
import PruebaHooks from "./PruebaHooks";

export const Home = () => {

  const [ contador, setContador ] = useState(0)

  return (
    <>
    <Menu />
      <PruebaHooks contador={contador}  setContador={setContador}/>
      
    </>
  );
};

export default Home;