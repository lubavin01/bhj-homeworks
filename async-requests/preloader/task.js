const itemsBlock = document.getElementById('items');
const itemBlock = document.querySelector('.item');
const loader = document.getElementById('loader');

window.onload = () => {
    const cache = localStorage.getItem('netology_preloaderHW_itemsInnerHTML');
    if (cache) {
        itemsBlock.innerHTML = cache;
        loader.classList.remove('loader_active');
    }


    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
    xhr.responseType = 'text';

    xhr.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {

            let data = JSON.parse(this.responseText);
            if (data) {
                const date = data.response.Date;
                const allValuteData = data.response.Valute;

                if (allValuteData) {

                    let itemsInnerHTML = '';
                    for (let prop in allValuteData) {
                        const valute = allValuteData[prop];         

                        itemsInnerHTML +=
                            `<div class="item">
                                <div class="item__code">
                                    ${valute.CharCode}
                                </div>
                                <div class="item__value">
                                    ${valute.Value}
                                </div>
                                <div class="item__currency">
                                    руб.
                                </div>
                            </div>`;

                    };

                    itemsBlock.innerHTML = itemsInnerHTML;

                    loader.classList.remove('loader_active');

                    localStorage.setItem('netology_preloaderHW_itemsInnerHTML', itemsInnerHTML);
                }

            }

        }
    }

    xhr.send();
}