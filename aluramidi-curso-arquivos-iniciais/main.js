function makeSound (idElementoAudio)
{
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeTeclas.length; cont++)
{
  const tecla = listaDeTeclas[cont];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;
  
  tecla.onclick = function () {
    makeSound(idAudio);
  }
}

document.addEventListener("keydown", function (event) {
  var key = event.key.toUpperCase();
  
  var soundMap = {
    A: "som_tecla_pom",
    S: "som_tecla_clap",
    D: "som_tecla_tim",
    F: "som_tecla_puff",
    G: "som_tecla_splash",
    H: "som_tecla_toim",
    J: "som_tecla_psh",
    K: "som_tecla_tic",
    L: "som_tecla_tom",
  };

  var soundId = soundMap[key];

  if (soundId) {
    document.querySelector("#" + soundId).play();
  } else {
    console.log("Tecla Indefinida");
  }
});
