class Farm {
  constructor(animals, farmName) {
    this._farmName = farmName;
    this._animals = animals;
  }

  addKindOfAnimals(kindOfAnimal) {
    this._animals[kindOfAnimal] = [];
  }

  showAllKindsOfAnimals() {}

  getTotalAge() {}

  get nameOfFarm() {}

  set nameOfFarm(newName) {}
}
