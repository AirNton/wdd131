const articles = [
    {
        buildin: "Snow",
        room: "108",
        rate: "7",
        description: "Even urinals, smells good, no 'head glitch'(dont't ask us what that means we are the professionals)."
    },
    {
        buildin: "Snow",
        room: "125",
        rate: "6.5",
        description: "Uneven urinals, weird mirror placement, low towel dispenser."
    },
    {
        buildin: "Snow",
        room: "Elevator",
        rate: "10",
        description: "10/10 elevator."
    },
    {
        buildin: "Snow",
        room: "298",
        rate: "3.25",
        description: "Everything is bad, dirt, wierd location, bad mirror placement."
    },
    {
        buildin: "Snow",
        room: "203",
        rate: "5",
        description: "Mid af, not good but not bad."
    },
    {
        buildin: "Snow",
        room: "171",
        rate: "7.5",
        description: "Open floor plan, even sink to mirror ratio, uneven urinals count."
    },
    {
        buildin: "Hart",
        room: "183",
        rate: "8",
        description: "Lots of good stuff but always busy."
    },
    {
        buildin: "Hart",
        room: "238",
        rate: "9",
        description: "Lots of urinals and some stalls. Ceiling to counter mirrors, but the wallsa are a  weird color."
    },
    {
        buildin: "Hart",
        room: "207",
        rate: "3.33",
        description: "It’s a locker room so not a lot of bathroom stuff. Easy to get lost. Also seeing people in their birthday suit is possible. Tread lighlty."
    },
    {
        buildin: "I Center",
        room: "Floor 1",
        rate: "9.5",
        description: "Connects to gym, 7 urinals and 7 stalls. Good mirrors and sinks."
    },
    {
        buildin: "I Center",
        room: "Floor 2",
        rate: "8.5",
        description: "Because a guy said so. And ceiling room mirrors."
    },
    {
        buildin: "Snow",
        room: "119",
        rate: "8",
        description: "Cool floor plan. Good urinals and stalls. Good mirrors to sink ratio."
    },
    {
        buildin: "Snow",
        room: "Opposite of 119",
        rate: "7.25",
        description: "Same as 119 but the sinks are wierd."
    }
];

const mainContent = document.querySelector('#maincontent');

function renderArticles(article) {
    return `
        <article class="review">
            <section class="list">
                <ul class="no-bullets">
                    <li><strong>Building:</strong> ${article.buildin}</li>
                    <li><strong>Room:</strong> ${article.room}</li>
                    <li><strong>Rating:</strong> ${article.rate}/10</li>
                </ul>
            </section>
            <section class="mid_info">
                <p>${article.description}</p>
            </section>
        </article>`;
}

function renderAll(filteredArticles) {
    const container = document.getElementById("maincontent");
    container.innerHTML = filteredArticles.map(renderArticles).join(""); // Use renderArticles here
}
  
  // Handle dropdown filter
  document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("buildingFilter");
  
    // Initial render
    renderAll(articles);
  
    // On change
    filter.addEventListener("change", () => {
      const value = filter.value;
      if (value === "all") {
        renderAll(articles);
      } else {
        const filtered = articles.filter(a => a.buildin === value);
        renderAll(filtered);
      }
    });
  });
