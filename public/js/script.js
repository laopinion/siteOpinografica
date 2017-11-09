
function menuOpen(){
  var hamburger = document.getElementById('hamburger');
  hamburger.classList.toggle('open');
  var existe = hamburger.classList.contains('open');
  var menu = document.getElementById('menu');
  if(existe){
    menu.style.display = 'block';
  }else{
    menu.style.display = 'none';
  }
  // var menu = document.getElementById('menu');
  // menu.classList.toggle('desplegar');
}

// Obtenemos la posicion del elemento
// var elemento = document.getElementById('logoP');
// var posicion = elemento.getBoundingClientRect();
// console.log(posicion.top);

window.addEventListener('scroll', function(e) {
  // console.log(window.scrollY);
  var header = document.getElementsByTagName('header')[0];
  var positionY = window.scrollY;

  function logoMenu() {
    // var menuRedes = document.getElementById('menuRedes');
    // var logo = menuRedes.getElementsByClassName('logoMenu')[0];
    // Una forma mas facil de hacerlo con querySelector
    var logo = document.querySelector('#menuRedes .logoMenu');
    return logo;
  }

  if(positionY > 108){
    header.classList.add('fixedHeader');
    logoMenu().style.display = 'block';
  }else{
    header.classList.remove('fixedHeader');
    logoMenu().style.display = 'none';
  }
});

function texto(x, a){
  if(a == 1){
    document.querySelector('#productos .row-1 .titleAgendas').innerHTML = x;
  }else if(a == 2){
    document.querySelector('#productos .row-2 .titleAnuarios').innerHTML = x;
  }else if(a == 3){
    document.querySelector('#productos .row-3 .titleCalendarios').innerHTML = x;
  }else if(a == 4){
    document.querySelector('#productos .row-4 .titleCarpetas').innerHTML = x;
  }else if(a == 5){
    document.querySelector('#productos .row-5 .titleRevistas').innerHTML = x;
  }else if(a == 6){
    document.querySelector('#productos .row-6 .titleMembretada').innerHTML = x;
  }else if(a == 7){
    document.querySelector('#productos .row-7 .titleLibros').innerHTML = x;
  }else if(a == 8){
    document.querySelector('#productos .row-8 .titleMiselaneas').innerHTML = x;
  }else if(a == 9){
    document.querySelector('#productos .row-9 .titlePeriodicos').innerHTML = x;
  }else if(a == 10){
    document.querySelector('#productos .row-10 .titleSeparatas').innerHTML = x;
  }else if(a == 11){
    document.querySelector('#productos .row-11 .titleTroqueladas').innerHTML = x;
  }else if(a == 12){
    document.querySelector('#productos .row-12 .titlePlegables').innerHTML = x;
  }else if(a == 13){
    document.querySelector('#productos .row-13 .titleTarjetas').innerHTML = x;
  }else if(a == 14){
    document.querySelector('#productos .row-14 .titleVolantes').innerHTML = x;
  }
}

function textoOriginal(x, a){
  if(a == 1){
    document.querySelector('#productos .row-1 .titleAgendas').innerHTML = x;
  }else if(a == 2){
    document.querySelector('#productos .row-2 .titleAnuarios').innerHTML = x;
  }else if(a == 3){
    document.querySelector('#productos .row-3 .titleCalendarios').innerHTML = x;
  }else if(a == 4){
    document.querySelector('#productos .row-4 .titleCarpetas').innerHTML = x;
  }else if(a == 5){
    document.querySelector('#productos .row-5 .titleRevistas').innerHTML = x;
  }else if(a == 6){
    document.querySelector('#productos .row-6 .titleMembretada').innerHTML = x;
  }else if(a == 7){
    document.querySelector('#productos .row-7 .titleLibros').innerHTML = x;
  }else if(a == 8){
    document.querySelector('#productos .row-8 .titleMiselaneas').innerHTML = x;
  }else if(a == 9){
    document.querySelector('#productos .row-9 .titlePeriodicos').innerHTML = x;
  }else if(a == 10){
    document.querySelector('#productos .row-10 .titleSeparatas').innerHTML = x;
  }else if(a == 11){
    document.querySelector('#productos .row-11 .titleTroqueladas').innerHTML = x;
  }else if(a == 12){
    document.querySelector('#productos .row-12 .titlePlegables').innerHTML = x;
  }else if(a == 13){
    document.querySelector('#productos .row-13 .titleTarjetas').innerHTML = x;
  }else if(a == 14){
    document.querySelector('#productos .row-14 .titleVolantes').innerHTML = x;
  }
}


function rightImg(el) {
  const row = el.dataset.row;
  let click = el.dataset.click;
  let array = [];

  if (row == 1 || row == 2 || row == 3 || row == 4 || row == 7 || row == 8 || row == 11 || row == 13 || row == 14) {
    el.style.display = 'none';
  }

  if (row == 5) {
    if (click == 1){ 
      document.querySelector('#sectionThree #productos .row-5 .flechaProductosLeft').style.display = 'block';
      el.style.display = 'none';
    }
  }

  if (row == 6) {
    if (click == 1){ 
      document.querySelector('#sectionThree #productos .row-6 .flechaProductosLeft').style.display = 'block';
      el.style.display = 'none';
    }
  } 

  if (row == 9) {
    if (click == 1){ 
      document.querySelector('#sectionThree #productos .row-9 .flechaProductosLeft').style.display = 'block';
      el.style.display = 'none';
    }
  } 

  if (row == 12) {
    if (click == 1){ 
      document.querySelector('#sectionThree #productos .row-12 .flechaProductosLeft').style.display = 'block';
      el.style.display = 'none';
    }
  } 

  // console.log(el)

  if (row == 3) {
    document.querySelector('#sectionThree #productos .row-3 .flechaProductosLeft').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-3 img');
  } else if (row == 4) {
    document.querySelector('#sectionThree #productos .row-4 .flechaProductosLeft').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-4 img');
  } else if (row == 5) {
    array = document.querySelectorAll('#sectionThree #productos .row-5 img');    
    click++;
    el.dataset.click = click;
  } else if (row == 6) {
    array = document.querySelectorAll('#sectionThree #productos .row-6 img');
    click++;
    el.dataset.click = click;
  }else if (row == 7) {
    document.querySelector('#sectionThree #productos .row-7 .flechaProductosLeft').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-7 img');    
  }else if (row == 8) {
    document.querySelector('#sectionThree #productos .row-8 .flechaProductosLeft').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-8 img');
  }else if (row == 9) {
    array = document.querySelectorAll('#sectionThree #productos .row-9 img');
    click++;
    el.dataset.click = click;
  }else if (row == 11) {
    document.querySelector('#sectionThree #productos .row-11 .flechaProductosLeft').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-11 img');
  }else if (row == 12) {
    array = document.querySelectorAll('#sectionThree #productos .row-12 img');
    click++;
    el.dataset.click = click;
  }else if (row == 13) {
    document.querySelector('#sectionThree #productos .row-13 .flechaProductosLeft').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-13 img');
  }else if (row == 14) {
    document.querySelector('#sectionThree #productos .row-14 .flechaProductosLeft').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-14 img');
  }

  Array.prototype.slice.call(array).map(function callback(element, index) {
    if (row != 7 && row != 6 && row != 5 && row != 9 && row != 11 && row != 12 && row != 13 && row != 14) {
      element.style.left = '-335px';
    } else if (row == 7) {
      element.style.left = '-482px';
    } else if (row == 6) {
      if (click == 2) {
        element.style.left = '-850px';
        el.dataset.click = 0;
      } else {
        element.style.left = '-520px';
      }
    } else if (row == 5) {
      if (click == 2) {
        element.style.left = '-820px';
        el.dataset.click = 0;
      }else {
        element.style.left = '-500px';
      }
    } else if (row == 9) {
      if (click == 2) {
        element.style.left = '-1130px';
        el.dataset.click = 0;
      }else {
        element.style.left = '-150px';
      }
    } else if (row == 11) {
      element.style.left = '-712px';
    }else if (row == 12) {
      if (click == 2) {
        element.style.left = '-1106px';
        el.dataset.click = 0;
      }else {
        element.style.left = '-168px';
      }
    }else if (row == 13) {
      element.style.left = '-680px';
    }else if (row == 14) {
      element.style.left = '-355px';
    }
    // console.log('ok todo bien', element);
  });

}

function leftImg(el){
  const row = el.dataset.row;  
  let click = el.dataset.click;
  let array = [];
  
  if (row == 1 || row == 2 || row == 3 || row == 4 || row == 7 || row == 8 || row == 11 || row == 13 || row == 14) {
    el.style.display = 'none';
  }

  if (row == 5) {
    if (click == 1){
      document.querySelector('#sectionThree #productos .row-5 .flechaProductosRight').style.display = 'block';
      el.style.display = 'none';
    }
  }

  if (row == 6){
    if(click == 1) {
      document.querySelector('#sectionThree #productos .row-6 .flechaProductosRight').style.display = 'block';
      el.style.display = 'none';
    }
  } 

  if (row == 9){
    if(click == 1) {
      document.querySelector('#sectionThree #productos .row-9 .flechaProductosRight').style.display = 'block';
      el.style.display = 'none';
    }
  }

  if (row == 12){
    if(click == 1) {
      document.querySelector('#sectionThree #productos .row-12 .flechaProductosRight').style.display = 'block';
      el.style.display = 'none';
    }
  } 

  if (row == 3) {
    document.querySelector('#sectionThree #productos .row-3 .flechaProductosRight').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-3 img');
  } else if (row == 4) {
    document.querySelector('#sectionThree #productos .row-4 .flechaProductosRight').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-4 img');
  } else if (row == 5) {
    array = document.querySelectorAll('#sectionThree #productos .row-5 img');
    click++;
    el.dataset.click = click;
  } else if (row == 6) {
    array = document.querySelectorAll('#sectionThree #productos .row-6 img');
    click++;
    el.dataset.click = click;
  }else if (row == 7) {
    document.querySelector('#sectionThree #productos .row-7 .flechaProductosRight').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-7 img');
  }else if (row == 8) {
    document.querySelector('#sectionThree #productos .row-8 .flechaProductosRight').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-8 img');
  }else if (row == 9) {
    array = document.querySelectorAll('#sectionThree #productos .row-9 img');
    click++;
    el.dataset.click = click;
  }else if (row == 11) {
    document.querySelector('#sectionThree #productos .row-11 .flechaProductosRight').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-11 img');
  }else if (row == 12) {
    array = document.querySelectorAll('#sectionThree #productos .row-12 img');
    click++;
    el.dataset.click = click;
  }else if (row == 13) {
    document.querySelector('#sectionThree #productos .row-13 .flechaProductosRight').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-13 img');
  }else if (row == 14) {
    document.querySelector('#sectionThree #productos .row-14 .flechaProductosRight').style.display = 'block';
    array = document.querySelectorAll('#sectionThree #productos .row-14 img');
  }

  Array.prototype.slice.call(array).map(function callback(element, index) {
    
    if (row == 3 || row == 4 || row == 8) {
      element.style.left = '0';
    }

    if (row == 6) {
      if (click == 2) {
        element.style.left = '470px';
        el.dataset.click = 0;
      }else {
        element.style.left = '-520px';
      }
    }

    if (row == 5){
      if (click == 2) {
        element.style.left = '470px';
        el.dataset.click = 0; 
      } else {
        element.style.left = '-500px';
      }
    }

    if (row == 9){
      if (click == 2) {
        element.style.left = '775px';
        el.dataset.click = 0; 
      } else {
        element.style.left = '-150px';
      }
    } 

    if (row == 12){
      if (click == 2) {
        element.style.left = '775px';
        el.dataset.click = 0; 
      } else {
        element.style.left = '-168px';
      }
    } 

    if (row == 7) {
      element.style.left = '170px';
    }else if (row == 11) {
      element.style.left = '325px';
    }else if (row == 13) {
      element.style.left = '375px';
    }else if (row == 14) {
      element.style.left = '0';
    }
    // console.log('ok todo bien', element);
  });
}


// var p = 0;
// var px = -80;
var i, p, a, px, sentido;


// transform: rotate(180deg)
// -webkit-transform: rotate(180deg)
// -moz-transform: rotate(180deg)

function girar(){
  // console.log('Hola soy ->'+p);
  var x = document.querySelectorAll('#galeria .img');
  var data = document.querySelector('#sectionFour .btnGirar');
  px = data.getAttribute('data-pixel');
  p = data.getAttribute('data-porce');
  sentido = data.getAttribute('data-sentido');
  px = parseInt(px);
  p = parseInt(p);
  // console.log(px);
  if(px == -7200){
    sentido = 1;
    data.setAttribute('data-sentido', sentido);
  }else if(px == -200){
    sentido = 0;
    data.setAttribute('data-sentido', sentido);
  }

  if(sentido == 0){
    px = px - 1000;
    p = p + 12;
    data.style.transform = 'rotate('+p+'deg)'
  }else{
    px = px + 1000;
    p = p - 12;
    data.style.transform = 'rotate('+p+'deg)'
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.left = px+'px';
  }
  data.setAttribute('data-pixel', px);
  data.setAttribute('data-porce', p);
  // if( p < 20){// porcentaje de 0 a 100
  //   p++;
  //   p = setTimeout('girar('+p+','+ a+')', 200);
  // }
}

/*const btns = document.querySelectorAll('.js-btn');
const sections = document.querySelectorAll('.js-section');

btns[0].addEventListener('click', () => {
  scrollIt(sections[0]);
});

btns[1].addEventListener('click', () => {
  scrollIt(sections[1]);
});

btns[2].addEventListener('click', () => {
  scrollIt(sections[2]);
});

btns[3].addEventListener('click', () => {
  scrollIt(sections[3]);
});*/

function scrollIt(element) {  
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

const btnLogoMenu = document.querySelector('.logoMenu');
const body = document.querySelector('body');

btnLogoMenu.addEventListener('click', () => {
  scrollIt(body);
});
