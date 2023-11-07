async function getCatFacts() {

  const response = await fetch('https://catfact.ninja/facts');
  const data = await response.json();

  let factsHtml = '';

  for (let i = 0; i < 5; i++) {
    let count = 0;
    // get a random fact
    const factIndex = Math.floor(Math.random() * data.data.length);
    const fact = data.data[factIndex];

    factsHtml += `
      <p class="banner-box">😺 ${fact.fact} 😺 </p>
    `;

  }

  document.querySelector(".cat-information").innerHTML = factsHtml;

}

getCatFacts();