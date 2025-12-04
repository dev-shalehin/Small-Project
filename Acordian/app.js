

function expand() {
  const headers = document.querySelectorAll(".accordion-item");
  const contents = document.querySelectorAll(".accordion-content");

  headers.forEach((header, index) => {
    header.addEventListener("click", () => {
      const isOpen = contents[index].classList.contains("show");
      contents.forEach(c => c.classList.remove("show"));

      headers.forEach(h => {
        const i = h.querySelector('.icon i');
        i.classList.remove('fa-minus');
        i.classList.add('fa-plus');
      });

      if(!isOpen) {
        contents[index].classList.add("show");
        const clickedIcon = header.querySelector('.icon i');
        clickedIcon.classList.remove('fa-plus');
        clickedIcon.classList.add('fa-minus');
      }
    });
  });
}

expand();
