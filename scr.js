var btnSearch = document.querySelector('.icon-search'),
    inputSeach = document.querySelector('.search'),
    close = document.querySelector('.icon-close');

btnSearch.onclick  = function() {
    inputSeach.classList.toggle('hienSearch')
}
close.onclick = function() {
    inputSeach.classList.remove('hienSearch')
}


// slide


