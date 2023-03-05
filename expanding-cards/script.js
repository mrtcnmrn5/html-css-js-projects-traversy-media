const foto = document.querySelectorAll("img[class='foto']");
    foto.forEach((imaj) => {
       imaj.addEventListener("click", () => {
     imaj.classList.toggle("expand");
       })
    });

