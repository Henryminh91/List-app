import Layout from "./components/Layout";
import BeerDetails from "./components/Beerdetails.jsx";
import beersData from "./Beers";

const App = () => {
  return (
    <div>
      <h1>Beer App</h1>
      {beersData.map((beer) => (
        <Layout key={beer.id}>
          <h3>Top {beer.id}</h3>
          <BeerDetails beer={beer} />
        </Layout>
      ))}
    </div>
  );
};

export default App;
