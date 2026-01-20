const API_KEY = 'a6702f284b194a24929e74b63a4f1b7b';

// Fetch real articles when page loads
async function loadArticles() {
  try {
    // Get articles
    const response = await fetch(`https://newsapi.org/v2/everything?q=geopolitics&language=en&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`);
    const data = await response.json();
    
    // Fill Left Column (articles 0-2)
    document.querySelector('.news_left').innerHTML = `
      <h2>Left Perspective</h2>
      <p><strong>${data.articles[0].title}</strong></p>
      <p>By ${data.articles[0].source.name}</p>
      <p><a href="${data.articles[0].url}" target="_blank">Read full article →</a></p>
      <br>
      <p><strong>${data.articles[1].title}</strong></p>
      <p>By ${data.articles[1].source.name}</p>
      <p><a href="${data.articles[1].url}" target="_blank">Read full article →</a></p>
    `;
    
    // Fill Center Column (articles 3-4)
    document.querySelector('.news_center').innerHTML = `
      <h2>Center Perspective</h2>
      <p><strong>${data.articles[3].title}</strong></p>
      <p>By ${data.articles[3].source.name}</p>
      <p><a href="${data.articles[3].url}" target="_blank">Read full article →</a></p>
      <br>
      <p><strong>${data.articles[4].title}</strong></p>
      <p>By ${data.articles[4].source.name}</p>
      <p><a href="${data.articles[4].url}" target="_blank">Read full article →</a></p>
    `;
    
    // Fill Right Column (articles 6-7)
    document.querySelector('.news_right').innerHTML = `
      <h2>Right Perspective</h2>
      <p><strong>${data.articles[6].title}</strong></p>
      <p>By ${data.articles[6].source.name}</p>
      <p><a href="${data.articles[6].url}" target="_blank">Read full article →</a></p>
      <br>
      <p><strong>${data.articles[7].title}</strong></p>
      <p>By ${data.articles[7].source.name}</p>
      <p><a href="${data.articles[7].url}" target="_blank">Read full article →</a></p>
    `;
    
  } catch (error) {
    console.log('Error loading articles:', error);
  }
}

// Run when page loads
loadArticles();
