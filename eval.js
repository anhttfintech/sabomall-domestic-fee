"use strict";
(async () => {
    var result = await fetch(`https://raw.githubusercontent.com/anhttfintech/sabomall-domestic-fee/main/index.js?v=${new Date().getTime()}`, { cache: "no-cache" });

    if (result.status !== 200) {
        alert('Lỗi dữ liệu gốc');
        throw new Error('Lỗi dữ liệu gốc');
    }

    var content = await result.text();

    eval(content);

    // function addScript(src, callback) {
    //     var s = document.createElement('script');
    //     s.setAttribute('src', src);
    //     s.onload = callback;
    //     document.body.appendChild(s);
    // }

    // addScript(`https://cdn.jsdelivr.net/gh/anhttfintech/sabomall-domestic-fee@v2.0/index.js?v=${new Date().getTime()}`, () => {});
})();
