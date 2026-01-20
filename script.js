// Demo articles - no API needed
function loadArticles() {
  // Left Column
  document.querySelector('.news_left').innerHTML = `
    <h2>Left Perspective</h2>
    <p><strong>Climate Action Summit Calls for Immediate Global Response</strong></p>
    <p>By The Guardian</p>
    <p><a href="https://www.theguardian.com/environment" target="_blank">Read full article →</a></p>
    <br>
    <p><strong>Universal Healthcare Gains Support Across European Nations</strong></p>
    <p>By BBC News</p>
    <p><a href="https://www.bbc.com/news/health" target="_blank">Read full article →</a></p>
  `;
  
  // Center Column
  document.querySelector('.news_center').innerHTML = `
    <h2>Center Perspective</h2>
    <p><strong>Global Markets Show Mixed Results Amid Economic Uncertainty</strong></p>
    <p>By Reuters</p>
    <p><a href="https://www.reuters.com/markets/" target="_blank">Read full article →</a></p>
    <br>
    <p><strong>Tech Industry Leaders Discuss AI Regulation Framework</strong></p>
    <p>By Associated Press</p>
    <p><a href="https://apnews.com/technology" target="_blank">Read full article →</a></p>
  `;
  
  // Right Column
  document.querySelector('.news_right').innerHTML = `
    <h2>Right Perspective</h2>
    <p><strong>Tax Reform Bill Promises Economic Growth, Say Analysts</strong></p>
    <p>By The Wall Street Journal</p>
    <p><a href="https://www.wsj.com/economy" target="_blank">Read full article →</a></p>
    <br>
    <p><strong>Border Security Measures Show Positive Results</strong></p>
    <p>By Fox News</p>
    <p><a href="https://www.foxnews.com/politics" target="_blank">Read full article →</a></p>
  `;
}

// Run when page loads
loadArticles();
