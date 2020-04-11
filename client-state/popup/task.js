const subscribeModal = document.getElementById('subscribe-modal');

function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for(var propName in props){

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie

}

function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}


window.onload = () => {
    const closed = getCookie('cookieClosed');
    if (!closed) {
        subscribeModal.classList.add(`modal_active`);
    }
}

subscribeModal.onclick = function (event) {

    if (!event.target.matches('.modal__close')) {
        return;
    }

    //const popup = event.target.closest('div.modal');
    this.classList.remove(`modal_active`);   

    setCookie('cookieClosed', true);   
}


