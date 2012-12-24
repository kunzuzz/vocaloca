function sendToServer() {
    $.post("http://127.0.0.1:8124/", JSON.stringify(prepareData()), function () {
        alert("Words sent!");
    });
}

function prepareData() {
    var storage = window.localStorage;
    var i;
    var key;
    var value;
    var list = {};
    for (i = 0; i < storage.length; i++) {
        key = storage.key(i);
        value = JSON.parse(getLine(key));
        list[key] = value;
    }

    return list;
}