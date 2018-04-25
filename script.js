const btn = document.querySelector(".btn-shorten");
const link = document.querySelector(".link");
const divResponse = document.querySelector(".response");

const url = "https://www.googleapis.com/urlshortener/v1/url";
const key = "AIzaSyB1UxjrCQncN1bkBHeqo-YtAyw2Qkb4p6E";

const xhr = new XMLHttpRequest();
xhr.responseType = "json";

function shorten(e) {
    e.preventDefault();
    let data;
    if(link.value !== "") {
         data = JSON.stringify({"longUrl": link.value});
    } else {
        alert("Invalid value!");
        return;
    }
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(divResponse.firstChild) {
                divResponse.removeChild(divResponse.firstChild);
            }
            let a = document.createElement("a");
            a.textContent = this.response.id;
            a.setAttribute('href', this.response.id);
            a.setAttribute("target", "blank");
            let h4 = document.createElement("h4");
            h4.appendChild(a);
            divResponse.appendChild(h4);

        }
    };

    xhr.open("POST", url + "?key=" + key);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);

}

btn.addEventListener('click', shorten);