function bilet() {
  var a, b, c, d, e, f;
  a = Math.floor(Math.random() * 100);
  b = Math.floor(Math.random() * 100);
  c = Math.floor(Math.random() * 100);
  d = Math.floor(Math.random() * 100);
  e = Math.floor(Math.random() * 100);
  f = Math.floor(Math.random() * 100);
  document.write("<table border=1 width=500>");
  document.write("<tr>");
  document.write(
    "<td>" + a + "</td>" + "<td>" + b + "</td>" + "<td>" + c + "</td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td>" + d + "</td>" + "<td>" + e + "</td>" + "<td>" + f + "</td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td>" + b + "</td>" + "<td>" + e + "</td>" + "<td>" + a + "</td>"
  );
  document.write("</tr>");
  document.write("</table>");
}
