/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
module.exports = (N, paths) => {
  const gardens = new Array(N + 1).fill().map((_) => ({
    flower: "",
    connectedGardens: [],
  }));

  for (const [a, b] of paths) {
    gardens[a].connectedGardens.push(gardens[b]);
    gardens[b].connectedGardens.push(gardens[a]);
  }

  const flowers = [...new Array(4).keys()].map((f) => f + 1);

  for (const garden of gardens.slice(1))
    for (const flower of flowers)
      if (!garden.connectedGardens.map((g) => g.flower).includes(flower)) {
        garden.flower = flower;
        break;
      }

  return gardens.slice(1).map((g) => g.flower);
};
