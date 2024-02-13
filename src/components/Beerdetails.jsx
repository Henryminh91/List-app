import PropTypes from "prop-types";

const BeerDetails = ({ beer }) => {
  return (
    <div>
      <h2>{beer.name}</h2>
      <p>ABV: {beer.abv}%</p>
      <p>{beer.description}</p>
    </div>
  );
};
BeerDetails.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeerDetails;
