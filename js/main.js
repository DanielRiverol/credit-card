const form = document.querySelector("form"),
  inputCard = document.querySelector(".card-number-input"),
  boxNumber = document.querySelector(".card-number-box"),
  inputNameBox = document.querySelector(".card-holder-input"),
  nameBox = document.querySelector(".card-holder-name"),
  monthInput = document.querySelector(".month-input"),
  expMonth = document.querySelector(".exp-month"),
  yearInput = document.querySelector(".year-input"),
  expYear = document.querySelector(".exp-year"),
  claveInput = document.querySelector(".cvv-input"),
  claveBox = document.querySelector(".cod-seg-box"),
  btnGuardar = document.querySelector(".submit-btn");

//No implementado
class CreditCard {
  constructor(numero, nombre, mes, anio, codseg) {
    (this.numero = numero),
      (this.nombre = nombre),
      (this.mes = mes),
      (this.anio = anio),
      (this.codseg = codseg);
  }
}
function crearTarjeta(numero, nombre, mes, anio, codseg) {
  const tarjeta = new CreditCard(numero, nombre, mes, anio, codseg);
  return tarjeta;
}
////////

//Faltan algunos Listeners
let cleave = new Cleave(".card-number-input", {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    // update UI ...
    inputCard.addEventListener("keyup", () => {
      boxNumber.innerText = inputCard.value;
    });
  },
});

inputNameBox.addEventListener("keyup", () => {
  nameBox.innerHTML = inputNameBox.value.toUpperCase();
});

monthInput.addEventListener("change", () => {
  expMonth.innerHTML = monthInput.value;
});

yearInput.addEventListener("change", () => {
  expYear.innerText = yearInput.value;
});

claveInput.addEventListener("mouseenter", () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
});

claveInput.addEventListener("mouseleave", () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
});

claveInput.addEventListener("keyup", () => {
  claveBox.innerText = claveInput.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //qué hace el evento
  if (
    inputCard.value == "" ||
    inputNameBox.value == "" ||
    monthInput.value == "" ||
    yearInput.value == ""
  ) {
    Swal.fire({
      title:'Todos los campos son requeridos!',
      
      icon:'error',}
    )

  }else{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Su compra fue procesada con éxito'
    })
  
  }
});
