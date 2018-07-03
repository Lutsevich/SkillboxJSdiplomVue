function addZero(x) {
    if (x < 10) {
        return '0' + x;
    } else {
        return x;
    }
}


export default {
    methods: {
        dateFormat(d) {
            let dt = new Date(d);
            let day = dt.getDate();
            let month = dt.getMonth() + 1;
            let year = dt.getFullYear();
            return `${addZero(day)} ${addZero(month)} ${addZero(year)}`;
        }
    }
}