function sendToServer() {
    alert("Before send!");
//    $.post("http://86.57.159.55:8124/", JSON.stringify(prepareData()), function () {
//        alert("Words sent!");
//    });

    $.ajax({
        type: 'POST',
        url: 'http://86.57.159.55:8124/',
        data: JSON.stringify(prepareData()),
        dataType: 'json',
        timeout: 300,
        success: function (data) {
            alert('Sent success!');
        },
        error: function (xhr, errorType, error) {
            alert('Sent error!' + errorType + error);
        }
    })
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
