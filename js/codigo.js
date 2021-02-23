window.addEventListener("load", carregar);

function carregar() {
    document.getElementById("getAll").addEventListener("click", getAll);
    document.getElementById("getName").addEventListener("click", getName);
    document.getElementById("getFullName").addEventListener("click", getFullName);

    document.getElementById("getCode").addEventListener("click", getCode);
    document.getElementById("getListCode").addEventListener("click", getListCode);
    document.getElementById("getCurrency").addEventListener("click", getCurrency);

    document.getElementById("getLang").addEventListener("click", getLang);
    document.getElementById("getCapCity").addEventListener("click", getCapCity);
    document.getElementById("getCallCode").addEventListener("click", getCallCode);

    document.getElementById("getRegion").addEventListener("click", getRegion);
    document.getElementById("getRegBloc").addEventListener("click", getRegBloc);
    document.getElementById("getServices").addEventListener("click", getServices);
}

function ajaxCall(url) {
    $.ajax(
        {
            url: url,
            method: 'GET',
            success: function (data) {
                $('#res').text(JSON.stringify(data, null, 2));
            },
            error: function (error) {
                console.log(error);
            }
        }
    );
}

function getAll() {
    ajaxCall('https://restcountries.eu/rest/v2/all');
}

function getName() {
    var x = document.getElementById("tName").value;
    ajaxCall('https://restcountries.eu/rest/v2/name/' + x);
}

function getFullName() {
    var x = document.getElementById("tFullName").value;
    ajaxCall('https://restcountries.eu/rest/v2/name/' + x + '?fullText=true');
}

function getCode() {
    var x = document.getElementById("tCode").value;
    ajaxCall('https://restcountries.eu/rest/v2/alpha/' + x);
}

function getListCode() {
    var x = document.getElementById("tCode1").value + ";";
    var x2 = document.getElementById("tCode2").value + ";";
    var x3 = document.getElementById("tCode3").value + ";";
    ajaxCall('https://restcountries.eu/rest/v2/alpha?codes=' + x + x2 + x3);
}

function getCurrency() {
    var x = document.getElementById("tCurr").value;
    ajaxCall('https://restcountries.eu/rest/v2/currency/' + x);
}

function getLang() {
    var x = document.getElementById("tLang").value;
    ajaxCall('https://restcountries.eu/rest/v2/lang/' + x);
}

function getCapCity() {
    var x = document.getElementById("tCap").value;
    ajaxCall('https://restcountries.eu/rest/v2/capital/' + x);
}

function getCallCode() {
    var x = document.getElementById("tCall").value;
    ajaxCall('https://restcountries.eu/rest/v2/callingcode/' + x);
}

function getRegion() {
    var x = document.getElementById("tReg").value;
    ajaxCall('https://restcountries.eu/rest/v2/region/' + x);
}

function getRegBloc() {
    var x = document.getElementById("tRegBloc").value;
    ajaxCall('https://restcountries.eu/rest/v2/regionalbloc/' + x);
}

function getServices() {
    var x = document.getElementById("tSer").value + "?fields=";
    var x1 = document.getElementById("tSer1").value + ";";
    var x2 = document.getElementById("tSer2").value + ";";
    var x3 = document.getElementById("tSer3").value + ";";
    console.log('https://restcountries.eu/rest/v2/' + x + x1 + x2 + x3);
    ajaxCall('https://restcountries.eu/rest/v2/' + x + x1 + x2 + x3);
}
