if (localStorage.getItem("status") == "false") {
    location.replace("index.html")
}
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

        $("#tbodys").append(tabelCreated)
    }

    $(".logoututton").on("click", function () {
        localStorage.setItem("status", "false")
    })

    $.get(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            var gettedData = data
            $(".tablerow").remove()
            for (var i = 0; i < gettedData.length; i++) {
                tableCreation(gettedData[i])
            }

            var newchecker = document.getElementById("new")
            var packedchecker = document.getElementById("packed")
            var transitchecker = document.getElementById("transit")
            var deliveredchecker = document.getElementById("delivered")

            $("#filter").on("click", function () {
                $(".tablerow").remove()
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == false &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi == "New") {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == true &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi == "Packed") {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == false &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi == "InTransit") {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == false &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (takingDataFromApi == "Delivered") {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == true &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "New" ||
                            takingDataFromApi == "Packed"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == false &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "New" ||
                            takingDataFromApi == "InTransit"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == false &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "New" ||
                            takingDataFromApi == "Delivered"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == true &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "Packed" ||
                            takingDataFromApi == "InTransit"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == true &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "Packed" ||
                            takingDataFromApi == "Delivered"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == false &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "InTransit" ||
                            takingDataFromApi == "Delivered"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == true &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "New" ||
                            takingDataFromApi == "Packed" ||
                            takingDataFromApi == "InTransit"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == true &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "New" ||
                            takingDataFromApi == "Packed" ||
                            takingDataFromApi == "Delivered"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == false &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "New" ||
                            takingDataFromApi == "InTransit" ||
                            takingDataFromApi == "Delivered"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == true &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "Packed" ||
                            takingDataFromApi == "InTransit" ||
                            takingDataFromApi == "Delivered"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == true &&
                    packedchecker.checked == true &&
                    transitchecker.checked == true &&
                    deliveredchecker.checked == true
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi == "New" ||
                            takingDataFromApi == "Packed" ||
                            takingDataFromApi == "InTransit" ||
                            takingDataFromApi == "Delivered"
                        ) {
                            console.log("yes")
                            count = count + 1
                            tableCreation(gettedData[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    newchecker.checked == false &&
                    packedchecker.checked == false &&
                    transitchecker.checked == false &&
                    deliveredchecker.checked == false
                ) {
                    var count = 0
                    for (var i = 0; i < gettedData.length; i++) {
                        var takingDataFromApi = gettedData[i].orderStatus
                        if (
                            takingDataFromApi !== "New" &&
                            takingDataFromApi !== "Packed" &&
                            takingDataFromApi !== "InTransit" &&
                            takingDataFromApi !== "Delivered"
                        ) {
                            console.log("yes")
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
