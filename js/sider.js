  // 返回
  var showLeftback1 = document.getElementById( 'showLeftback1' ),
  showLeftback2 = document.getElementById( 'showLeftback2' ),
  showLeftback3 = document.getElementById( 'showLeftback3' ),
  showLeftback4 = document.getElementById( 'showLeftback4' ),
  showLeftback5 = document.getElementById( 'showLeftback5' ),
  menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
  menuLeft3 = document.getElementById( 'cbp-spmenu-s2' ),
  menuLeft4 = document.getElementById( 'cbp-spmenu-s3' ),
  menuLeft5 = document.getElementById( 'cbp-spmenu-s4' ),
  menuLeft6 = document.getElementById( 'cbp-spmenu-s6' );
  showLeftback1.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft, 'cbp-spmenu-open' );
  disableOther( 'showLeft' );
};
  showLeftback2.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft3, 'cbp-spmenu-open' );
  disableOther( 'showLeft' );
};
showLeftback3.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft4, 'cbp-spmenu-open' );
  disableOther( 'showLeft' );
};
showLeftback4.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft5, 'cbp-spmenu-open' );
  disableOther( 'showLeft' );
};
showLeftback5.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft6, 'cbp-spmenu-open' );
  disableOther( 'showLeft' );
};

//側邊攔
var showLeftPush = document.getElementById( 'showLeftPush' ),
  menuLeft2= document.getElementById( 'cbp-spmenu-s5' ),
  body = document.body;
  showLeftPush.onclick = function() {
  classie.toggle( this, 'active' );
  // classie.toggle( body, 'cbp-spmenu-push-toright' );
  classie.toggle( menuLeft2, 'cbp-spmenu-open' );
  disableOther( 'showLeftPush' );
};

var showLeft = document.getElementById( 'showLeft' ),
  showLeft2 = document.getElementById( 'showLeft2' ),
  showLeft3 = document.getElementById( 'showLeft3' ),
  showLeft4 = document.getElementById( 'showLeft4' ),
  showLeft5 = document.getElementById( 'showLeft5' );
  
showLeft.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft, 'cbp-spmenu-open' );
  disableOther( 'showLeft' );
};

showLeft2.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft3, 'cbp-spmenu-open' );
  disableOther( 'showLeft2' );
};

showLeft3.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft4, 'cbp-spmenu-open' );
  disableOther( 'showLeft3' );
};

showLeft4.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft5, 'cbp-spmenu-open' );
  disableOther( 'showLeft4' );
};

showLeft5.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft6, 'cbp-spmenu-open' );
  disableOther( 'showLeft5' );
};