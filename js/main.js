function getYear() {
    var year = new Date().getFullYear();
    $("#attribute")[0].innerHTML = "&copy;" + year + " FOUNDOPS LLC";
}

$(document).ready(function () {
    getYear();

});