if (localStorage.getItem("status") == "false") {
    location.replace("index.html")
}
$(document).ready(function () {
    function tableCreater(data) {
        var addtables = `<tr class="table_row">
        <td class="id_data">
            ${data.id}
        </td>
        <td class="productdata">
        ${data.medicineName}
        </td>
        <td class="branddata">
        ${data.medicineBrand}
        </td>
        <td class="datedata">
        ${data.expiryDate}
        </td>
        <td class="pricedata">
        ${data.unitPrice}
        </td>
        <td class="stockdata">
        ${data.stock}
        </td>
    </tr>`

        $("#tbody").append(addtables)
    }

    $.get(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
        function (data) {
            var products = data
            for (var i = 0; i < products.length; i++) {
                tableCreater(products[i])
            }

            $("#logout").on("click", function () {
                localStorage.setItem("status", "false")
            })

            var tickexpired = document.getElementById("expired")
            var ticklowstock = document.getElementById("lowstock")
            var d = new Date()

            $("#lowstock").on("click", function () {
                $(".table_row").remove()
                var count = 0
                if (
                    tickexpired.checked == true &&
                    ticklowstock.checked == false
                ) {
                    for (var i = 0; i < products.length; i++) {
                        var intprice = products[i].stock
                        console.log(intprice)
                        if (intprice > 100) {
                            count = count + 1
                            tableCreater(products[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    tickexpired.checked == true &&
                    ticklowstock.checked == true
                ) {
                    for (var i = 0; i < products.length; i++) {
                        var intprice = products[i].stock
                        console.log(intprice)
                        count = count + 1
                        tableCreater(products[i])
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    tickexpired.checked == false &&
                    ticklowstock.checked == true
                ) {
                    var d = new Date()

                    for (var i = 0; i < products.length; i++) {
                        var datadate = products[i].expiryDate
                        if (d.getFullYear() < datadate.split("-")[2]) {
                            count = count + 1
                            tableCreater(products[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    tickexpired.checked == false &&
                    ticklowstock.checked == false
                ) {
                    var d = new Date()

                    for (var i = 0; i < products.length; i++) {
                        var datadate = products[i].expiryDate
                        var intprice = products[i].stock
                        if (
                            d.getFullYear() < datadate.split("-")[2] &&
                            intprice > 100
                        ) {
                            count = count + 1
                            tableCreater(products[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
            })
            $("#expired").on("click", function () {
                $(".table_row").remove()
                var count = 0
                if (
                    tickexpired.checked == true &&
                    ticklowstock.checked == false
                ) {
                    for (var i = 0; i < products.length; i++) {
                        var intprice = products[i].stock
                        console.log(intprice)
                        if (intprice > 100) {
                            count = count + 1
                            tableCreater(products[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    tickexpired.checked == true &&
                    ticklowstock.checked == true
                ) {
                    for (var i = 0; i < products.length; i++) {
                        var intprice = products[i].stock
                        console.log(intprice)
                        // if (intprice > 100) {
                        count = count + 1
                        tableCreater(products[i])
                        // }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    tickexpired.checked == false &&
                    ticklowstock.checked == true
                ) {
                    var d = new Date()

                    for (var i = 0; i < products.length; i++) {
                        var datadate = products[i].expiryDate
                        if (d.getFullYear() < datadate.split("-")[2]) {
                            count = count + 1
                            tableCreater(products[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
                if (
                    tickexpired.checked == false &&
                    ticklowstock.checked == false
                ) {
                    var d = new Date()

                    for (var i = 0; i < products.length; i++) {
                        var datadate = products[i].expiryDate
                        var intprice = products[i].stock
                        if (
                            d.getFullYear() < datadate.split("-")[2] &&
                            intprice > 100
                        ) {
                            count = count + 1
                            tableCreater(products[i])
                        }
                    }
                    $("#countDisplay").text("Count: " + count)
                }
            })
        }
    )
})
