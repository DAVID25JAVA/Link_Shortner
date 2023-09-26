let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

 async function short() {
     let longurl = document.getElementById("lurl").value;
     let shortURL = document.getElementById("shorturl");
       

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
     const data = await result.json();
     
     shortURL.value = data.result.short_link2;
}

let newURL = document.getElementById("shorturl");
let copybtn = document.getElementById("copy");

copybtn.onclick = () => {
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}