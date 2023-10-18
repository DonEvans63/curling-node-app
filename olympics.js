function games(country, medal) {
    return ` ${country.toUpperCase()} won the ${medal.toUpperCase()}!`;
  }

  
  module.exports = {
    games,
  }