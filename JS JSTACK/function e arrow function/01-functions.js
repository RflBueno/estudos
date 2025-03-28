function minhaFunction () {

  // return 1
  this.name = 'Rafael';

  const minhaArrowFunction = () => {
    this.lastname = 'Bueno';
  };

  minhaArrowFunction();
}

console.log(new minhaFunction());
console.log(this);