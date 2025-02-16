const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];

let attributeList = ["name", "image"];
// Expected Output

// let attributeList = [
//   "name",
//   "sugarFree",
//   "energy"
// ]

// const sodas2 = ["image", "name"];
sodas.forEach(soda => {
  let statment = "";
  for (let i in attributeList) {
    let prefix = attributeList[i];
    let description = soda[attributeList[i]];
    statment += `${prefix}`;
    console.log(i);
  }
  let name = soda.name;
  let image = soda.image;
});
