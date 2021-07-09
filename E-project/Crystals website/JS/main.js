
//------------ Close button --------------- //
const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
    menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
    });        

//------------ Navbar --------------- //
var navbar = document.getElementById('res-navbar');
var icon = document.getElementById('res-icon');
var navbarWidth = navbar.clientWidth;
  icon.onclick = function() {
    var isClosed = navbar.clientWidth === navbarWidth;
      if (isClosed) {
        navbar.style.width = 'auto';
      } else {
        navbar.style.width = null;
      }
  }

//------------ Resnew --------------- //  
var resnew = document.getElementById('res-new');
var whatnew = document.getElementById('what-new');
var back = document.getElementById('backnew');
var resnewWidth = resnew.clientWidth;
  whatnew.onclick = function() {
    var isClosed = resnew.clientWidth === resnewWidth;
      if (isClosed) {
        resnew.style.width = 'auto';
        resnew.style.display = 'block';
      } else {
        resnew.style.width = null;
        resnew.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resnew.clientWidth === resnewWidth;
    if (isClosed) {
      resnew.style.display = 'block';
    } else {
      resnew.style.display = 'none';
    } 
  }

//------------ Rescrystal --------------- //   
  var rescry = document.getElementById('res-crystal');
  var crystal = document.getElementById('cry-stal');
  var back = document.getElementById('backcry');
  var rescryWidth = rescry.clientWidth;
    crystal.onclick = function() {
      var isClosed = rescry.clientWidth === rescryWidth;
        if (isClosed) {
          rescry.style.width = 'auto';
          rescry.style.display = 'block';
        } else {
          rescry.style.width = null;
          rescry.style.display = 'none';
        }
    }
    back.onclick = function() {
      var isClosed = rescry.clientWidth === rescryWidth;
      if (isClosed) {
        rescry.style.display = 'block';
      } else {
        rescry.style.display = 'none';
      } 
    }
 
//------------ Resjew --------------- //   
var resjew = document.getElementById('res-jew');
var jewelry = document.getElementById('jew-elry');
var back = document.getElementById('backjew');
var resjewWidth = resjew.clientWidth;
  jewelry.onclick = function() {
    var isClosed = resjew.clientWidth === resjewWidth;
      if (isClosed) {
        resjew.style.width = 'auto';
        resjew.style.display = 'block';
      } else {
        resjew.style.width = null;
        resjew.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resjew.clientWidth === resjewWidth;
    if (isClosed) {
      resjew.style.display = 'block';
    } else {
      resjew.style.display = 'none';
    } 
  }
  
//------------ Reshome --------------- //   
var reshome = document.getElementById('res-home');
var home = document.getElementById('home-decor');
var back = document.getElementById('backhome');
var reshomeWidth = reshome.clientWidth;
  home.onclick = function() {
    var isClosed = reshome.clientWidth === reshomeWidth;
      if (isClosed) {
        reshome.style.width = 'auto';
        reshome.style.display = 'block';
      } else {
        reshome.style.width = null;
        reshome.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = reshome.clientWidth === reshomeWidth;
    if (isClosed) {
      reshome.style.display = 'block';
    } else {
      reshome.style.display = 'none';
    } 
  }

//------------ Reshome --------------- //   
var resgift = document.getElementById('res-gift');
var gift = document.getElementById('gi-ft');
var back = document.getElementById('backgift');
var resgiftWidth = resgift.clientWidth;
  gift.onclick = function() {
    var isClosed = resgift.clientWidth === resgiftWidth;
      if (isClosed) {
        resgift.style.width = 'auto';
        resgift.style.display = 'block';
      } else {
        resgift.style.width = null;
        resgift.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resgift.clientWidth === resgiftWidth;
    if (isClosed) {
      resgift.style.display = 'block';
    } else {
      resgift.style.display = 'none';
    } 
  }
  
//------------ Reshome --------------- //   
var resabout = document.getElementById('res-about');
var about = document.getElementById('ab-out');
var back = document.getElementById('backabout');
var resaboutWidth = resabout.clientWidth;
  about.onclick = function() {
    var isClosed = resabout.clientWidth === resaboutWidth;
      if (isClosed) {
        resabout.style.width = 'auto';
        resabout.style.display = 'block';
      } else {
        resabout.style.width = null;
        resabout.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resabout.clientWidth === resaboutWidth;
    if (isClosed) {
      resabout.style.display = 'block';
    } else {
      resabout.style.display = 'none';
    } 
  }  