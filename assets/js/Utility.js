function formatThousands(n, dp) {
    var s = '' + (Math.floor(n)), d = n % 1, i = s.length, r = '';
    while ((i -= 3) > 0) { r = ',' + s.substr(i, 3) + r; }
    return s.substr(0, i + 3) + r + (d ? '.' + Math.round(d * Math.pow(10, dp || 2)) : '');
}

String.prototype.format = function (...args) {
    let result = this.toString();
    let i = 0;
    for (let arg of args) {
        let strToReplace = "{" + i++ + "}";
        result = result.replace(strToReplace, (arg || ''));
    }
    return result;
}

//var path = "/Student/GetStudentById/{0}/collegeId/{1}";
//var studentId = "5";
//var collegeId = "10";
//var result = path.format(studentId, collegeId);
//console.log(result);