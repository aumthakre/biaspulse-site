// Demo articles - Global news focus
function loadArticles() {
  // Left Column
  document.querySelector('.news_left').innerHTML = `
    <h2>Left Perspective</h2>
    
    <p><strong>Climate Summit: World Leaders Commit to Aggressive 2030 Targets</strong></p>
    <p>Environmental groups praise historic agreement as nations pledge to cut emissions by 60% within six years.</p>
    <p>By The Guardian | <a href="https://www.theguardian.com/environment" target="_blank">Read more →</a></p>
    <br>
    
    <p><strong>Healthcare Expansion Gains Momentum Across Developed Nations</strong></p>
    <p>Progressive lawmakers in multiple countries push for universal coverage as new studies show gaps in access.</p>
    <p>By MSNBC | <a href="https://www.msnbc.com/health" target="_blank">Read more →</a></p>
    <br>
    
    <p><strong>Tech Workers Form Unions, Demand Better Workplace Protections</strong></p>
    <p>Employees cite concerns over job security and corporate surveillance in growing global labor movement.</p>
    <p>By NPR | <a href="https://www.npr.org/sections/business" target="_blank">Read more →</a></p>
  `;
  
  // Center Column
  document.querySelector('.news_center').innerHTML = `
    <h2>Center Perspective</h2>
    
    <p><strong>Global Markets React to Mixed Economic Signals</strong></p>
    <p>Stocks show volatility as investors weigh inflation data against strong employment numbers worldwide.</p>
    <p>By Reuters | <a href="https://www.reuters.com/markets/" target="_blank">Read more →</a></p>
    <br>
    
    <p><strong>Lawmakers Debate AI Regulation Framework</strong></p>
    <p>Bipartisan efforts seek middle ground between innovation and consumer protection in emerging technology.</p>
    <p>By Associated Press | <a href="https://apnews.com/technology" target="_blank">Read more →</a></p>
    <br>
    
    <p><strong>Central Banks Maintain Cautious Approach to Interest Rates</strong></p>
    <p>Financial officials cite optimism about recovery while monitoring inflation trends across major economies.</p>
    <p>By Bloomberg | <a href="https://www.bloomberg.com/economics" target="_blank">Read more →</a></p>
  `;
  
  // Right Column
  document.querySelector('.news_right').innerHTML = `
    <h2>Right Perspective</h2>
    
    <p><strong>Tax Reform Proposals Promise Economic Growth Across Western Nations</strong></p>
    <p>Conservative economists project GDP boosts as lawmakers unveil plans to simplify tax codes and cut rates.</p>
    <p>By The Wall Street Journal | <a href="https://www.wsj.com/economy" target="_blank">Read more →</a></p>
    <br>
    
    <p><strong>Border Security Investments Show Results in Multiple Countries</strong></p>
    <p>Governments report technology upgrades and personnel increases yield measurable reductions in illegal crossings.</p>
    <p>By Fox News | <a href="https://www.foxnews.com/politics" target="_blank">Read more →</a></p>
    <br>
    
    <p><strong>Small Business Owners Report Regulatory Burden Concerns Globally</strong></p>
    <p>International surveys reveal compliance costs as top challenge to expansion and hiring in multiple markets.</p>
    <p>By The Washington Times | <a href="https://www.washingtontimes.com/news/business" target="_blank">Read more →</a></p>
  `;
}

// Run when page loads
loadArticles();
