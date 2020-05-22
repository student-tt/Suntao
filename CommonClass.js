
function requestMethod(part1, part2, part3, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(part1, 'post','https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+part2);
    xhr.setRequestHeader("content-type","application/x-ww-form-urlencoded");
    xhr.send(part3)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText包含服务端返回的数据
            var res = JSON.parse(xhr.responseText);
            var str = res.data;
            callback(str);
        }
    }
}



