document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submitbtn');

    submitButton.addEventListener('click', function (event) {
        let isValid = true;

        // Validate First Name
        if (fnameInput.value.trim() === '') {
            document.getElementById('err-fname').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('err-fname').style.display = 'none';
        }

        // Validate Last Name
        if (lnameInput.value.trim() === '') {
            document.getElementById('err-lname').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('err-lname').style.display = 'none';
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            document.getElementById('err-message').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('err-message').style.display = 'none';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });


    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('quali');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".quali > .wrap { border-right: 0.08em solid #4cfb92; padding-left: 0.08em; padding-right: 0.}";
        document.body.appendChild(css);
    };
});
