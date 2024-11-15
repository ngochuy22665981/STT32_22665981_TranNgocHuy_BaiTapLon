$(document).ready(function () {
    var name = localStorage.getItem('name');
    var img = localStorage.getItem('img');
    var price = localStorage.getItem('price');
    var amount = localStorage.getItem('amount');

    $('#name').text(name);
    $('#img').attr('src', img);
    $('#price').text(price);
    $('#amount').text(amount);

    // Tổng tiền
    const priceNumber = parseFloat(price.replace(/[^0-9]/g, '')); // Loại bỏ ký tự không phải số, dấu phẩy và dấu chấm
    const totalPrice = priceNumber * amount;
    const totalPriceString = totalPrice.toString();

    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    const formattedTotalPrice = totalPriceString.replace(regex, '$1.');

    $('#total').text(formattedTotalPrice + ' VND'); // Định dạng lại số thập phân và thêm đơn vị VND

    // $('#total').text(price * amount);

    $('#datHang').on('click', function (event) {

        event.preventDefault(); // Chặn hành động mặc định (hiển thị alert)
        alert('Đặt hàng thành công');

        // Chuyển hướng trang sau khi hiển thị thông báo
        window.location.href = 'products.html';
    });
});