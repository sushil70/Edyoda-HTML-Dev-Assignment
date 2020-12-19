$(document).ready(function () {
    if (localStorage.getItem("status") == "true") {
        location.replace("order.html")
    }
    $("#button").on("click", function (event) {
        var userid = document.getElementById("username")
        var passkey = document.getElementById("password")
        event.preventDefault()
        if (userid.value == "" || passkey.value == "") {
            alert("Enter Username and Password")
        } else {
            if (userid.value === passkey.value) {
                alert("Login Successful")
                localStorage.setItem("status", "true")
                $.post(
                    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",
                    function (data) {
                        data = {userid: userid.value, password: passkey.value}
                    }
                )
                if (localStorage.getItem("status") == "true") {
                    location.replace("order.html")
                }
            } else {
                alert("Please enter valid credentials!")
            }
        }
    })
})
