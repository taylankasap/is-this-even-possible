function coffee() {
  return {
    empty: false,
    refill() {
      console.log("Refilling coffee");
      this.empty = false;
    },
    get drink() {
      console.log("Drinking coffee");
    },
  };
}

var coffee = new coffee();
if(coffee.empty){
coffee.refill();
}else{
coffee.drink;
}
