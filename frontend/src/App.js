import "./App.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe("pk_test_51IEf6PIDYHdZy515vRE927R1walUxaHDeNd4VgrkMdTVyANlFTIvjHSprptYUWt23G4cy3rKrNw4YG3DC9mADLUu002XO4Jrry");

function App() {
  return (
    <div className="app">
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
}

export default App;
