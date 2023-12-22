document.querySelectorAll(".btn")[0].addEventListener("click", function () {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelectorAll(".btn")[0].innerHTML = "Refresh for Light Mode";
    document.querySelector("html").classList.add("d");

});
var i = 0;
for (i = 0; i < 26; i++) {
    document.getElementsByClassName("btn-primary")[i].addEventListener("click", function () {


        if (this.classList[2] == ("_1")) {
            var myAudio = new Audio('./sounds/a.mp3');
            myAudio.play();

            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[0].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_2")) {
            var myAudio = new Audio('./sounds/b.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[1].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_3")) {
            var myAudio = new Audio('./sounds/c.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[2].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_4")) {
            var myAudio = new Audio('./sounds/d.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[3].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_5")) {
            var myAudio = new Audio('./sounds/e.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[4].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_6")) {
            var myAudio = new Audio('./sounds/f.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[5].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_7")) {
            var myAudio = new Audio('./sounds/g.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[6].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_8")) {
            var myAudio = new Audio('./sounds/h.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[7].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_9")) {
            var myAudio = new Audio('./sounds/i.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[8].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_10")) {
            var myAudio = new Audio('./sounds/j.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[9].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_11")) {
            var myAudio = new Audio('./sounds/k.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[10].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_12")) {
            var myAudio = new Audio('./sounds/l.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[11].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_13")) {
            var myAudio = new Audio('./sounds/m.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[12].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_14")) {
            var myAudio = new Audio('./sounds/n.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[13].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_15")) {
            var myAudio = new Audio('./sounds/o.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[14].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_16")) {
            var myAudio = new Audio('./sounds/p.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[15].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_17")) {
            var myAudio = new Audio('./sounds/q.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[16].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_18")) {
            var myAudio = new Audio('./sounds/r.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[17].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_19")) {
            var myAudio = new Audio('./sounds/s.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[18].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_20")) {
            var myAudio = new Audio('./sounds/t.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[19].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_21")) {
            var myAudio = new Audio('./sounds/u.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[20].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_22")) {
            var myAudio = new Audio('./sounds/v.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[21].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_23")) {
            var myAudio = new Audio('./sounds/w.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[22].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_24")) {
            var myAudio = new Audio('./sounds/x.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[23].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_25")) {
            var myAudio = new Audio('./sounds/y.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[24].classList.remove("pressed");
            }, 500);
        }
        if (this.classList[2] == ("_26")) {
            var myAudio = new Audio('./sounds/z.mp3');
            myAudio.play();
            this.classList.add("pressed");

            setTimeout(function () {
                document.getElementsByClassName("btn-primary")[25].classList.remove("pressed");
            }, 500);
        }




    })
}