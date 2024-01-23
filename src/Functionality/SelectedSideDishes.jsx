export default function selectedSideDishes(
  baconSelected,
  followUp,
  cheddarSelected,
  sauceSelected
) {
  if (baconSelected === true) {
    followUp = [...followUp, { id: 1, item: "1x Bacon 10g", price: "R$1.00" }];
  }
  if (cheddarSelected === true) {
    followUp = [
      ...followUp,
      { id: 2, item: "1x Cheddar 10g", price: "R$1.00" },
    ];
  }
  if (sauceSelected === true) {
    followUp = [
      ...followUp,
      { id: 3, item: "1x Molho acompanhamento Barbecue", price: "R$1.00" },
    ];
  }
}
