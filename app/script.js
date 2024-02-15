var x;
x = prompt("23+3=?");
if (x == 26) document.write("Cavab duzdur.");
else document.write("Cavab sehvdir.");
document.write("<br>");

var x;
x = prompt("Xəzər dənizi boyukdur?");
if (x == "boyuk") document.write("Cavab duzdur.");
else document.write("Cavab sehvdir.");
document.write("<br>");

var x;
x = prompt("Parol:");
if (x == "orxan") document.write("welcome!");
else document.write("wrong!");
document.write("<br>");

var x;
x = prompt("Yasinizi daxil edin:");
if (x > 18) document.write("welcome!");
else if (x == 18) document.write("icaze vereqesi");
else document.write("ancaq 18 ve 18den boyuk olanlar");
document.write("<br>");

var x;
x = prompt("sirani daxil edin:");
if (x < 10) {
  document.write("biletler bitmis");
} else if (x == 10) {
  document.write("bes bilet var");
} else {
  document.write("ondan yuxari siralarda bilet var");
}
document.write("<br>");

var x;
t = prompt("Temperaturu daxil edin:");
if (t == 10) {
  document.write("Hava soyuqdur.");
} else if (t == 20) {
  document.write("Hava istidir.");
} else {
  document.write("Proqnoz verile bilmedi.");
}
