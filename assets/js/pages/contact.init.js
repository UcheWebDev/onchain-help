function validateForm() {
    var e = document.forms.myForm.name.value,
        t = document.forms.myForm.email.value,
        r = document.forms.myForm.comments.value;
    if (((document.getElementById("error-msg").style.opacity = 0), (document.getElementById("error-msg").innerHTML = "") == e || null == e))
        return (document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message'><i  data-feather='home' class='icon-sm align-middle me-2'></i> Please enter a name</div>"), fadeIn(), !1;
    if ("" == t || null == t)
        return (document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message'><i  data-feather='alert-triangle' class='icon-sm align-middle me-2'></i> Please enter a email</div>"), fadeIn(), !1;
    if ("" == r || null == r) return (document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message'><i class='mdi mdi-alert'></i> Please enter a Message</div>"), fadeIn(), !1;
    var n = new XMLHttpRequest();
    return (
        (n.onreadystatechange = function () {
            4 == this.readyState &&
                200 == this.status &&
                ((document.getElementById("simple-msg").innerHTML = this.responseText), (document.forms.myForm.name.value = ""), (document.forms.myForm.email.value = ""), (document.forms.myForm.comments.value = ""));
        }),
        n.open("POST", "php/contact.php", !0),
        n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        n.send("name=" + e + "&email=" + t + "&comments=" + r),
        !1
    );
}
function fadeIn() {
    var e = document.getElementById("error-msg"),
        t = 0,
        r = setInterval(function () {
            t < 1 ? ((t += 0.5), (e.style.opacity = t)) : clearInterval(r);
        }, 200);
}
