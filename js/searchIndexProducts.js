// Search functionality for products
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  
  if (searchInput && searchButton) {
    searchButton.addEventListener('click', function() {
      performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(searchInput.value);
      }
    });
  }
  
  function performSearch(query) {
    if (!query || query.trim() === '') return;
    
    // Store the search query in session storage
    sessionStorage.setItem('searchQuery', query);
    
    // Redirect to search results page (if it exists) or handle search in current page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
      // If on home page, you might want to redirect to a search results page
      // window.location.href = 'search-results.html';
      
      // For now, just log the search query
      console.log('Search query:', query);
    }
  }
});