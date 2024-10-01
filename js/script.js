window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-willify');

    // Jika jarak scroll dari atas lebih besar dari 100px, tambahkan kelas "scrolled", jika tidak, hapusnya.
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

const btnoffcanvas = document.getElementById('btn-offcanvas');
const btnoffcanvasclose = document.getElementById('btnoffcanvasclose');
const offcanvas = document.getElementById('offcanvas');

btnoffcanvas.addEventListener('click', function () {
    offcanvas.classList.add('show');
    document.body.style.overflowY = 'hidden';
});

btnoffcanvasclose.addEventListener('click', function () {
    offcanvas.classList.remove('show');
    document.body.style.overflowY = 'auto';
});
