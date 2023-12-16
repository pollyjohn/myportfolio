function setMainMarginTop() {
    const headerHeight = document.getElementById('header').offsetHeight;
    document.querySelector('main').style.marginToptop = '${headerHeight}px';
}
  
window.onload = setMainMarginTop;
  