if (localStorage.getItem("status") == "false") {
    location.replace("index.html")
}
$(document).ready(function () {
    function creatertable(data) {
        var addtable = `<tr class="tablerow">
        <td class="iddata">
            ${data.id}
        </td>
        <td class="avatardata">
            <img
                src="${data.profilePic}"
                alt="Profile Pic"
            />
        </td>
        <td class="fullnamedata">
        ${data.fullName}
        </td>
        <td class="boddata">
        ${data.dob}
        </td>
        <td class="genderdata">
        ${data.gender}
        </td>
        <td class="locationdata">
        ${data.currentCity},${data.currentCountry}
        </td>
    </tr>`

        $("#tbodys").append(addtable)
    }

    $.get(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
        function (data) {
            var user = data
            $(".tablerow").remove()
            for (var i = 0; i < user.length; i++) {
                creatertable(user[i])
            }
            $("#logout").on("click", function () {
                localStorage.setItem("status", "false")
            })
            $("#reset").click(function (event) {
                event.preventDefault()
            })
            $("#searchbox").on("keypress", function (event) {
                var keycode = event.keyCode ? event.keyCode : event.which
                if (keycode == "13") {
                    event.preventDefault()
                    $(".tablerow").remove()
                    var valueGot = this.value.toLowerCase()
                    if (valueGot.length >= 2) {
                        for (var i = 0; i < user.length; i++) {
                            var name = user[i].fullName.toLowerCase()
                            var comparingFinder = name.search(valueGot)

                            if (comparingFinder >= 0) {
                                creatertable(user[i])
                            }
                        }
                    } else {
                        for (var i = 0; i < user.length; i++) {
                            creatertable(user[i])
                        }
                        alert("Please enter at least 2 characters")
                    }
                }
            })
            $("#reset").on("click", function () {
                $(".tablerow").remove()
                for (var i = 0; i < user.length; i++) {
                    creatertable(user[i])
                }
                var cleaner = document.getElementById("searchbox")
                cleaner.value = ""
            })
        }
    )
})
