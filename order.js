$(document).ready(function () {
    function tableCreation(data) {
        var tabelCreated = `<tr class="tablerow">
        <td class="id_data">
            ${data.id}
        </td>
        <td class="customer_data">
        ${data.customerName}
        </td>
        <td class="data_data">
        ${data.orderDate} <br /><span
                class="time_part"
                >${data.orderTime}</span
            >
        </td>
        <td class="amount_data">
            $${data.amount}
        </td>
        <td class="status_data">
        ${data.orderStatus}
        </td>
    </tr>`

        $("tbody").append(tabelCreated)
    }

    $(".logoututton").on("click", function () {
        localStorage.setItem("status", "false")
    })

    $.get(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            var gettedData = data
            for (var i = 0; i < gettedData.length; i++) {
                tableCreation(gettedData[i])
            }

            // $('.nav_item').addclass('active')

            $("#new").on("click", function () {
                $(".tablerow").remove()
                if (this.checked == true) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        // if (takingDataFromApi == "New") {
                        console.log("yes")
                        count = count + 1
                        tableCreation(gettedData[i])
                        // }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (this.checked == false) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi !== "New") {
                            console.log("not")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
            })

            $("#packed").on("click", function () {
                $(".tablerow").remove()
                if (this.checked == true) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        // if (takingDataFromApi == "Packed") {
                        console.log("yes")
                        count = count + 1
                        tableCreation(gettedData[i])
                        // }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (this.checked == false) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi !== "Packed") {
                            console.log("not")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
            })
            $("#transit").on("click", function () {
                $(".tablerow").remove()
                if (this.checked == true) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        // if (takingDataFromApi == "Packed") {
                        console.log("yes")
                        count = count + 1
                        tableCreation(gettedData[i])
                        // }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (this.checked == false) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi !== "InTransit") {
                            console.log("not")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
            })
            $("#delivered").on("click", function () {
                $(".tablerow").remove()
                if (this.checked == true) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        // if (takingDataFromApi == "Packed") {
                        console.log("yes")
                        count = count + 1
                        tableCreation(gettedData[i])
                        // }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (this.checked == false) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi !== "Delivered") {
                            console.log("not")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
            })
        }
    )
})
