let mform = document.getElementById("mform");
        let overlay = document.getElementById("form-overlay");
        let fall = document.getElementById("fall");
        let hamburger = document.getElementById("hamburger");
        let see = document.getElementById("see");
        let see2 = document.getElementById("see2");
        let eyeColor = document.getElementById("eye-color");
        let switchMan = document.querySelector('.switch-test');
        let switchMan1 = document.querySelector('.switch-test1');
        let switchMan2 = document.querySelector('.switch-test2');
        let switchMan3 = document.querySelector('.switch-test3');
        let switchMa = document.querySelectorAll('.switch-test2');
        let chainb = document.getElementById("servi");
        let scam = document.getElementById("scam");
        let caColor = document.querySelectorAll(".switch-testc");
        console.log(caColor);

        function myFunction() {

            mform.style.opacity = "1";
            mform.style.pointerEvents = "all";
            mform.style.zIndex = "4"
            overlay.style.opacity = "0.6"
            // overlay.style.pointerEvents = "all";
            overlay.style.zIndex = "3"
        };

        function thisFunction() {
            mform.style.opacity = "0";
            mform.style.pointerEvents = "none";
            overlay.style.opacity = "0"
        };
        hamburger.onclick = function () {
            if (fall.className == "open") {

                fall.className = "";
            }
            else {
                fall.className = "open";

            }
        };
        function passSee() {
            if (see.type === "password") {
                see.type = "text";
                eyeColor.style.color = "green"
            } else {
                see.type = "password"
                eyeColor.style.color = ""
            }
            if (see2.type === "password") {
                see2.type = "text";
            } else {
                see2.type = "password"
            }
        };
        scam.addEventListener('click', function(){
            chainb.classList.toggle('bg-white');
            switchMan.classList.toggle('bg-white');
            switchMan1.classList.toggle('bg-white');
            switchMan2.classList.toggle('bg-white');
            switchMan3.classList.toggle('bg-white');
            
            
        })
        function lightMode(){
            document.getElementById('switch-testc1').classList.toggle('green');
            document.getElementById('switch-testc4').classList.toggle('green');
            document.getElementById('switch-testc5').classList.toggle('green');
            document.getElementById('switch-testc6').classList.toggle('green');
            document.getElementById('switch-testc7').classList.toggle('green');
            document.getElementById("switch-testc8").classList.toggle('green');
            document.getElementById('switch-testc9').classList.toggle('green');
            document.getElementById('switch-testc10').classList.toggle('green');
            document.getElementById('switch-testc11').classList.toggle('green');
            document.getElementById('switch-testc12').classList.toggle('green');
        }
