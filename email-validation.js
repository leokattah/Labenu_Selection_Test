function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            document.form1.text1.focus();
        return true;
    }
        else {
            alert("EMAIL invalido");
            document.form1.text1.focus();
        return false;
    }
}