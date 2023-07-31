
window.addEventListener("scroll", function a(params) {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header__navbar").style.height = "60px";
        document.getElementById("header__content").style.background = "black";

    } else {
        if (window.innerWidth <= 768) {
            document.getElementById("header__navbar").style.height = "60px";
            document.getElementById("header__content").style.background = "transparent";
        } else {
            document.getElementById("header__navbar").style.height = "100px";
            document.getElementById("header__content").style.background = "transparent";
        }
    }

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("backtotop").style.transform = "translateY(0)";
        document.getElementById("backtotop").style.opacity = "1";
    } else {
        document.getElementById("backtotop").style.transform = "translateY(60px)";
        document.getElementById("backtotop").style.opacity = "0";
    }

    var urbanlist = document.getElementsByClassName("urban__load");
    if (isInViewport(urbanlist[0])) {
        urbanlist[0].style.right = "20%";
    }
    if (isInViewport(urbanlist[1])) {
        urbanlist[1].style.right = "10%";
    }
    if (isInViewport(urbanlist[2])) {
        urbanlist[2].style.right = "25%";
    }
}
)


// URBAN
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    if (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        return true;
    } else {
        return false;
    }
}

var nav = document.getElementById("main-nav");
var item = nav.getElementsByClassName("nav-link");
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function (params) {
        var current = nav.querySelector(".active");
        current.className = current.className.replace("active", "");
        this.className += " active";
    })
}

// BLOG
var notenav = document.getElementById("NoteTab");
var child = notenav.getElementsByClassName("nav-item");
for (let i = 0; i < child.length; i++) {
    child[i].addEventListener("click", function (params) {
        var cur = notenav.querySelector(".active1");
        cur.className = cur.className.replace("active1", "");
        this.className += "active1";
    })
}

