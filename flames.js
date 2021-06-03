var urName = document.getElementById("urName");
var crName = document.getElementById("crName");
var button = document.getElementById("button");

var output = document.getElementById("output");

button.addEventListener("click", function () {
    var flames = ["Friends", "Love", "Affectionate", "Married", "Enemy", "Siblings"];

    var ur = urName.value;
    var cr = crName.value;

    ur.toLowerCase;
    cr.toLowerCase;

    if (ur == null || ur == "") {
        alert("Enter your Name");
    }
    else if (!/^[a-zA-Z]*$/g.test(ur)) {
        alert("Inavalid Name");
    }

    else if (cr == null || cr == "") {
        alert("Enter crush Name");
    }
    else if (!/^[a-zA-Z]*$/g.test(cr)) {
        alert("Inavalid Name");
    }

    else {
        var first = ur;
        var sec = cr;
        var i;
        for (i = 0; i < ur.length; i++) {
            sec = sec.replace(ur[i], '');
        }

        for (i = 0; i < cr.length; i++) {
            first = first.replace(cr[i], '');
        }

        var final = first + sec;

        var finaLength = final.length;




        p = 0;
        counter = 0;
        if (finaLength == 1) {
            flames.splice(0, 5);
        }
        else {
            while (flames.length > 1) {
                if (counter == finaLength - 1) {
                    flames.splice(p, 1);
                    counter = 0;


                }
                p = (p + 1) % flames.length;
                counter++;

            }

        }
        output.innerHTML = flames;

    }


    
})
