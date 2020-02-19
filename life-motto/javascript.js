class Sadness {
  stop() {
    console.log("Stopping sadness");
  }
}

let sad = function() {
  sad = function() {
    return new Sadness();
  };

  return true;
};

function beAwesome() {
  console.log("Being awesome");
}

// life motto
if (sad() === true) {
  sad().stop();
  beAwesome();
}
