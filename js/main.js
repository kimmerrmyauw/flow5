
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Aku minta maaf yaa. Aku egois kemarin. Maafin aku yang sering bikin kamu capek. Aku janji bakal lebih dengerin kamu. Kamu mau maafin aku nggak? I LOVE U SAYANG').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
