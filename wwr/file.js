function setMainMarginTop() {
    const headerHeight = document.getElementById('header').offsetHeight;
    document.querySelector('main').style.top = '${headerHeight}px';
}
  
window.onload = setMainMarginTop;
  