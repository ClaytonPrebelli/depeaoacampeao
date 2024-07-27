

var submitContact = $("#submit_contact"),
  message = $("#msg");

submitContact.on("click", function (e) {
  console.log("teste");
  e.preventDefault();

  var $this = $(this);
  var envio = {
    nome: document.querySelector("#nome").value,
    email: document.querySelector("#mail").value,
    telefone: document.querySelector("#telefone").value,
  };
  console.log(envio);
  const options = {
    method: "GET",
    headers: {},
  };
  fetch(
    "https://prebellisolucoes.com/process.php?nome=" +
      envio.nome +
      "&email=" +
      envio.email +
      "&telefone=" +
      envio.telefone,
    options
  )
    .then((response) => {
      window.location.href = "https://zunar-rdsm-site.rds.land/agradecimento";
    })
    .catch((error) => {
      window.location.href = "https://zunar-rdsm-site.rds.land/agradecimento";
    });
});
var envioTest = {
  nome: null,
  email: null,
  telefone: null
};
function preenche(){
    envioTest.nome= document.querySelector("#nome").value;
      envioTest.email=document.querySelector("#mail").value;
      envioTest.telefone=document.querySelector("#telefone").value;
    
}


function valida() {
    preenche()
  var emailTrue = validarEmail(envioTest.email);
  var nomeTrue = validaNome(envioTest.nome);
  var foneTrue = validaFone(envioTest.telefone);
  habilita(emailTrue, nomeTrue, foneTrue);

}

function habilita(emailTrue, nomeTrue, foneTrue) {
  if (emailTrue && foneTrue && nomeTrue) {
    document.querySelector("#submit_contact").disabled = false;
  } else {
    document.querySelector("#submit_contact").disabled = true;
  }
}

function validaFone(fone) {
  if (fone.length >= 11) {
    return true;
  } else {
    return false;
  }
}
function validaNome(nome) {
  if (nome != "" && nome != null) {
    return true;
  } else {
    return false;
  }
}
function validarEmail(emailCapturadoDoFormulario) {
  let validarRegExNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailCapturadoDoFormulario.match(validarRegExNoEmail)) {
    return true;
  } else {
    return false;
  }
}

const handlePhone = (event) => {
  valida();
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
