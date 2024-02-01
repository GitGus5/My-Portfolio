const delay = 500;

// network request and delay
const request = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay <= 5000) {
        fetch(url)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      } else {
        reject('Connection Timeout :(');
      }
    }, delay);
  });
};

// Asynchronous function to get cat facts
async function getCatFacts() {
  try {
    const catData = await request('https://catfact.ninja/facts');
    let factsHtml = '';

    //iterate through 5 cat facts
    for (let i = 0; i < 5; i++) {
      // Get a random fact from data
      const factIndex = Math.floor(Math.random() * catData.data.length);
      const catFact = catData.data[factIndex];

      // use factsHtml empty string to create muliple unique cat facts in HTML
      factsHtml += `<p class="banner-box">😺 ${catFact.fact} 😺</p>`;
    }

    // The catFact data goes to HTML class .cat-information from factsHtml
    document.querySelector(".cat-information").innerHTML = factsHtml;
  }
  // catches any errors that occur
  catch (error) {
    console.error('Failed to load cat facts:', error);
  }
}

getCatFacts();
