function order(e) {
    event.preventDefault();

    var orderEl = document.querySelector('input[name="pizza"]:checked').value;


    var priceEl = 0

    if (orderEl === 'large') {
        priceEl = 1000;
    }
    if (orderEl === 'medium') {
        priceEl = 650
    }


    var toppingEl = document.getElementById('toppings').value;
    var toppingPrice = 0;


    if (toppingEl === 'olive') {
        toppingPrice = 50;
    }
    if (toppingEl === 'cheese') {
        toppingPrice = 100;
    }
    if (toppingEl === 'peproni') {
        toppingPrice = 90;
    }

    // crust section////////////////////////////

    var crustEL = document.getElementById('crust').value;
    var crustPrice = 0;


    if (crustEL === 'stuffed') {
        crustPrice = 50;

    }
    if (crustEL === 'gluten') {
        crustPrice = 30;
    }
    if (crustEL === 'crispy') {
        crustPrice = 90;
    }


    var total = toppingPrice + crustPrice + priceEl




    var finalEl = document.getElementById('')



    // ////////////values of the table ////////////


    $('#pizzaOrder').html(orderEl + " " + "pizza");
    $('#toppingsOrder').html(toppingEl + " ");
    $('#crustOrder').html(crustEL + " ")
    $('#totalOrder').html(total)














    console.log(total);

    $(document).ready(function() {

        $('#checkout').on('click', function() {
            Swal.fire({
                title: 'Do you want to add delivery fee',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    swal.fire('<input></input')
                    Swal.fire('Order has been recieved', 'your total is ' + total, 'success');
                } else if (result.isDenied) {
                    Swal.fire('You can pick up your order at the shop ', 'your total will be ' + total, 'success')
                }
            })


        })

    })
}