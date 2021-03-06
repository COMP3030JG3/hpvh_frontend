const getCookie = (key) => {
    const name = key + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

// defualt time is 30 days
const setCookie = (key, value) => {
    const duration = 30;
    const d = new Date();
    d.setTime(d.getTime() + (duration * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toGMTString();
    document.cookie = key + "=" + value + "; " + expires;
};

export { getCookie, setCookie }