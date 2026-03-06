// Utility: check if user is authenticated (isAuth === 'true')
function isAuthN() {
	console.log('isAuthN?', sessionStorage.getItem('isAuthN')); 
  return sessionStorage.getItem('isAuthN') === 'true';
  
  // todo: pick up here... check. 
}
// Run on page load
document.addEventListener('DOMContentLoaded', isAuthN);
