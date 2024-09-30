import { useState } from "react"
import Cars from "../components/Cars"
import RentedCarList from "../components/RentedCarList"
import { RentedCarData } from "../helpers/data"

const Home = () => {

  const [rents, setRents] = useState(RentedCarData)
  

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 mt-5">RANT A CAR</h1>
      <Cars rents={rents} setRents={setRents} />
      <RentedCarList rents={rents} setRents={setRents} />
    </main>
  );
}

export default Home