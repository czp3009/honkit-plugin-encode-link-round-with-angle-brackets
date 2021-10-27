module.exports = {
    hooks: {
        "page:before": function (page) {
            page.content = page.content.replace(/!\[(.*?)]\(<(.*?)>\)/g, (match, p1, p2) => {
                //round brackets will not be encoded
                const encodedP2 = encodeURI(p2).replace(/[!'()*]/g, (char) => {
                    return "%" + char.charCodeAt(0).toString(16);
                });
                return `![${p1}](${encodedP2})`;
            });
            return page;
        }
    }
};
