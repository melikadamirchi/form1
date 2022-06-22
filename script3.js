document.querySelector("#f").addEventListener('submit', handler);

function handler(el) {
    el.preventDefault();

    const txt = el.target.elements["txt"].value;
    const loc = el.target.elements["loc"].value;
    const photo = el.target.elements["photo"].value;
    const area = el.target.elements["area"].value;
    const email = el.target.elements["email"].value;
    const phone = el.target.elements["phone"].value;
    // const gender = el.target.elements["radio"].value;
    //






    //
    for (let i = 0; i < f.length; i++) {
        f.elements[i].value = ""
    }
    const obj = createDiv(txt, loc, photo, email, phone, area);

    const content = document.querySelector("#content");
    if (content.children.length === 0) {
        document.querySelector("#title").innerHTML = "Your informations are:"
    }


    content.appendChild(obj);

    function createDiv(txt, loc, photo, email, phone, area) {
        const divAsli = document.createElement('div');

        const img = document.createElement('img');
        if (phone.length !== 0) {
            img.setAttribute('src', photo);
        } else {
            const def = "a.png";
            img.setAttribute('src', def);
        }
        divAsli.appendChild(img);


        const txtt = document.createElement('p');
        txtt.innerHTML = `Your name is <b> ${txt}</b>`;
        divAsli.appendChild(txtt);

        const locc = document.createElement('p');
        locc.innerHTML = `Your last name is <b> ${loc}</b>`;
        divAsli.appendChild(locc);

        if (area.length !== 0) {
            const areaa = document.createElement('p');
            areaa.innerHTML = `Your decribtion is <b> ${area}</b>`;
            divAsli.appendChild(areaa);
        }

        const emaill = document.createElement('p');
        emaill.innerHTML = `Your email is <b> ${email}</b>`;
        divAsli.appendChild(emaill);

        const phonee = document.createElement('p');
        phonee.innerHTML = `Your phone number is <b> ${phone}</b>`;
        divAsli.appendChild(phonee);
        //
        // const genderr = document.createElement('p');
        // genderr.innerHTML = `you ${gender}`;
        // divAsli.appendChild(genderr)
        //     //
        const agree = document.createElement('h4');
        agree.innerHTML = "You are agree to all the conditions";
        divAsli.appendChild(agree);

        const btnn = document.createElement('button');
        btnn.innerHTML = 'remove'
        btnn.addEventListener('click', fnRemove)
        divAsli.appendChild(btnn);

        return divAsli;
    }

    function fnRemove(e) {
        const b = e.target.parentElement.parentElement;
        b.remove();
    }

    // const img = document.createElement('img');
    // img.setAttribute('alt', txt);
    // img.setAttribute('src', photo);

    // document.querySelector("#con2").appendChild(img)

    // var rate_value;
    // if (rates == 'Male') {
    //     rate_value = document.getElementById('radio1').value;

    // } else if (rates == 'Female') {
    //     rate_value = document.getElementById('radio2').value;

    // } else if (rates == 'Not to say') {
    //     rate_value = document.getElementById('radio3').value;
    // }








}