const mesajlarDiv = document.getElementById("mesajlar");
const mesajForm = document.getElementById("mesaj-form");
const mesajGiris = document.getElementById("mesaj-giris");
const mesajButon = document.getElementById("mesaj-buton");

mesajForm.addEventListener("submit", e => {
  e.preventDefault();

  const mesajKabarcik = document.createElement("div");
  mesajKabarcik.classList.add("mesaj", "mesaj-kabarcik");
  mesajKabarcik.innerText = mesajGiris.value;
  mesajlarDiv.appendChild(mesajKabarcik);

  const sorular = [
    {
      soru: "Merhaba!",
      cevap: "Merhaba!"
    },
    {
      soru: "Nasılsın?",
      cevap: "İyiyim, teşekkür ederim. Sen nasılsın?"
    },
    {
      soru: "İyi, teşekkür ederim",
      cevap: "Ben de iyiyim, teşekkür ederim. Bugün sana yardımcı olabileceğim bir şey var mı?"
    }
  ];

  let cevap = "Anlamadım, lütfen başka bir şey sorun.";
  for (let i = 0; i < sorular.length; i++) {
    if (mesajGiris.value === sorular[i].soru) {
      cevap = sorular[i].cevap;
      break;
    }
  }

  const cevapKabarcik = document.createElement("div");
  cevapKabarcik.classList.add("mesaj", "cevap-kabarcik");
  cevapKabarcik.innerText = cevap;
  mesajlarDiv.appendChild(cevapKabarcik);

  mesajGiris.value = "";
});

const modal = document.getElementById("gecmis-modal");
const btn = document.getElementById("gecmis-menu");
const span = document.getElementsByClassName("kapat")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const gecmisListesi = document.getElementById("gecmis-listesi");

function gecmisMesajlariOlustur(mesaj) {
  const li = document.createElement("li");
  li.innerHTML = mesaj;
  gecmisListesi.appendChild(li);
}

const mesajlar = [];

function mesajDepolama(mesaj) {
  mesajlar.push(mesaj);
  gecmisMesajlariOlustur(mesaj);
}

mesajDepolama("Merhaba, nasılsın?");
mesajDepolama("İyi, sen nasılsın?");
mesajDepolama("Ben de iyiyim, teşekkür ederim.");

gecmisListesi.onclick = function(e) {
  if (e.target && e.target.nodeName === "LI") {
  }
};

