function games(country, medal) {
    return ` ${country.toUpperCase()} won the ${medal.toUpperCase()}!`;
  }

function standings(country,town) {
  return `${country.toUpperCase()} population ${town.toUpperCase()}`;
}

function canada(percent,teams) {
  return `${percent.toUpperCase()} total number of teams ${teams}`;
}
  module.exports = {
    games,
  }