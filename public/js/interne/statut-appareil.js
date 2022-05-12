//page index client
$(document).ready(function () {
  var lignes = document.querySelectorAll(".ligne_client");
  //on récperer toute les lignes du tableau
  for (ligne of lignes) {
    //on recuperer le statut de chaque ligne
    var statut = ligne.childNodes;
    // Pour chaque statut on lui attrbut une classe
    if (statut[17].childNodes[1].innerText == "Livré") {
      ligne.classList.add("completed");
      statut[17].childNodes[1].classList.add("bg-green-dark");
    } else if (statut[17].childNodes[1].innerText == "Prêt à être récupéré") {
      statut[17].childNodes[1].classList.add("bg-green-light");
    } else if (statut[17].childNodes[1].innerText == "Pris en charge") {
      statut[17].childNodes[1].classList.add("bg-yellow-dark");
    } else if (statut[17].childNodes[1].innerText == "En attente de pièce") {
      statut[17].childNodes[1].classList.add("bg-purple-dark");
    } else if (statut[17].childNodes[1].innerText == "Devis envoyée") {
      statut[17].childNodes[1].classList.add("bg-blue-light");
    } else if (statut[17].childNodes[1].innerText == "En cours de réparation") {
      statut[17].childNodes[1].classList.add("bg-red-light");
    }
  }

  //Envoie du formulaire ChangeStatus

  $(document).on("submit", "#editFormStatut", function (e) {
    e.preventDefault();
    ajax_simple(this.action, $(this).serialize());
  });
  function ajax_simple(url, formData) {
    $.ajax({
      method: "POST",
      url: url,
      data: formData,
      dataType: "HTML",
    })
      .done(function (response) {
        //$(".modal-client").html(response);
        var split1 = response.split("<div class='pop-up'>");
        console.log(split1);
        console.log("done");
        // $(".modal-client").html(splitResponse);
      })
      .fail(function (jxh, textmsg) {
        console.log(url);
        console.log(textmsg);
        console.log(jxh);
      });
  }
});

//page all client
$(document).ready(function () {
  var lignes = document.querySelectorAll(".statutAppareilAll");
  //on récperer toute les lignes du tableau
  for (ligne of lignes) {
    //on recuperer le statut de chaque ligne
    var statut = ligne.childNodes;
    // Pour chaque statut on lui attrbut une classe

    if (statut[1].innerText == "Livré") {
      ligne.parentNode.classList.add("completed");
      statut[1].classList.add("bg-green-dark");
    } else if (statut[1].innerText == "Prêt à être récupéré") {
      statut[1].classList.add("bg-green-light");
    } else if (statut[1].innerText == "Pris en charge") {
      statut[1].classList.add("bg-yellow-dark");
    } else if (statut[1].innerText == "En attente de pièce") {
      statut[1].classList.add("bg-purple-dark");
    } else if (statut[1].innerText == "Devis envoyée") {
      statut[1].classList.add("bg-blue-light");
    } else if (statut[1].innerText == "En cours de réparation") {
      statut[1].classList.add("bg-red-light");
    }
  }
});
