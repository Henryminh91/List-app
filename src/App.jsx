
import React from 'react';
import Layout from './components/Layout';
import BeerDetails from './components/BeerDetails';
import beersData from './Beers';

const App = () => {
  return (
    <div>
      <h1>Beer App</h1>
      {beersData.map((beer, index) => (
        <Layout key={index}>
          <BeerDetails beer={beer} />
        </Layout>
      ))}
    </div>
  );
};

export default App;
