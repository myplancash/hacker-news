class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name)
    this._usesLitter = usesLitter
  }
}

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce

const MichiCat = new Cat('Michi', true)
console.log(MichiCat._behavior)
console.log(MichiCat._name)
MichiCat.incrementBehavior()
console.log(MichiCat._behavior)
console.log(MichiCat._usesLitter = false)
console.log(MichiCat)
