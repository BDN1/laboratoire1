/*
    Méthodes d'accès aux services Web API contactsManager
 */

//const apiBaseURL= "http://localhost:5000/api/contacts";
const apiBaseURL = "https://api-server-beta.glitch.me/api/contacts";

function webAPI_getcontacts(successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: contacts => {
            successCallBack(contacts);
            console.log("webAPI_getcontacts - success");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_getcontact - error");
        }
    });
}

function webAPI_getcontact(id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: contact => { successCallBack(contact); console.log("webAPI_getcontact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_getcontact - error");
        }
    });
}

function webAPI_addcontact(contact, successCallBack, errorCallBack) {
    console.log('add', contact)
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(contact),
        success: () => { successCallBack(); console.log("webAPI_addcontact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_addcontact - error");
        }
    });
}

function webAPI_modifycontact(contact, successCallBack, errorCallBack) {
    console.log('modify', contact)
    $.ajax({
        url: apiBaseURL + "/" + contact.Id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(contact),
        success: () => { successCallBack(); console.log("webAPI_modifycontact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_modifycontact - error");
        }
    });
}

function webAPI_deletecontact(id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        contentType: 'text/plain',
        type: 'DELETE',
        success: () => { successCallBack(); console.log("webAPI_deletecontact - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack("Erreur " + jqXHR.status);
            console.log("webAPI_deletecontact - error");
        }
    });
}
