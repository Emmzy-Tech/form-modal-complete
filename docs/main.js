let mform = document.getElementById("mform");
        let overlay = document.getElementById("form-overlay");
        let fall = document.getElementById("fall");
        let hamburger = document.getElementById("hamburger");
        let see = document.getElementById("see");
        let see2 = document.getElementById("see2");
        let eyeColor = document.getElementById("eye-color");
        let chainb = document.getElementById("servi");
        let scam = document.getElementById("scam");
        let caColor = document.querySelectorAll(".switch-testc");
        let light = document.getElementById("switch-test");
        let dark = document.getElementById("switch-test2");
        let darkBtn = document.getElementById("scamming");
        let switchOff = document.querySelector(".switch-btn");

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
            chainb.style.backgroundColor = "#fff";
                light.style.display = "none";
                dark.style.display = "block";
                darkBtn.style.display = "block"
                switchOff.style.display = "none"
                // 
                // 
            // switchMan.classList.toggle('bg-white');
            // for (let i = 0; i < caColor.length; i++) {
            //     caColor[i].classList.toggle('green');
                
            // }
        })
        function darkMode() {
            light.style.display = "block";
            dark.style.display = "none";
            chainb.style.backgroundColor = "#06b45d";
            darkBtn.style.display = "none"
            switchOff.style.display = "block"
        }
