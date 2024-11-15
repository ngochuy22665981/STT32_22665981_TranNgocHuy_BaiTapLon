

// document.addEventListener("DOMContentLoaded", function() {
//     const cartTableBody = document.querySelector("#content tbody");
//     var stt=1;

//             const product = JSON.parse(localStorage.getItem('listProduct'))

//             product.forEach(element => {
//                 const newRow = document.createElement("tr");
//                 newRow.innerHTML = `
//                     <td class="col-anh p-4"><img src="${element.Image}"alt="img"></td>
//                     <td class="py-5">${element.prName}</td>
//                     <td class="py-5">${element.prPrice}</td>
//                     <td class="py-5"><button class="btn btn-danger btn-sm remove-cart w-50">Xóa</button></td>
//                 `;
//                 cartTableBody.appendChild(newRow);
//                 stt++
//             });


//         const btn = cartTableBody.querySelectorAll(".remove-cart")
//         btn.forEach(e=>{
//             e.addEventListener("click",()=>{
//                 const parent = e.closest("tr");
//                 var productRemove = parent.querySelectorAll("td")
//                 var soTT = parseInt(productRemove[0].textContent);
//                 product.splice(soTT-1,1)
//                 localStorage.setItem('listProduct',JSON.stringify(product));
//                 parent.remove();
//                 this.location.reload()
//         })
//         })
//         const clearProduct = document.querySelector(".clearProduct");
//         clearProduct.addEventListener("click",()=>{
//             product.splice(0,product.length);
//             localStorage.setItem('listProduct',JSON.stringify(product));
//             alert("Thanh toán thành công")
//             this.location.reload()
//         })

// });


// document.addEventListener("DOMContentLoaded", function () {

// } );

// document.addEventListener("DOMContentLoaded", function () {
//   const addCartButtons = document.querySelectorAll(".add-cart");

//   addCartButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const card = button.closest(".card");
//       const imgSrc = card.querySelector("img").src;
//       const title = card.querySelector(".card-title").innerText;
//       const price = card.querySelector(".card-text").innerText;

//       const product = {
//         img: imgSrc,
//         title: title,
//         price: price
//       };

//       let cart = localStorage.getItem("cart");
//       cart = cart ? JSON.parse(cart) : [];

//       cart.push(product);

//       localStorage.setItem("cart", JSON.stringify(cart));

//       alert("Sản phẩm đã được thêm vào giỏ hàng!");
//     });
//   });
// });

// // Show
// document.addEventListener("DOMContentLoaded", function () {
//   let cart = localStorage.getItem("cart");
//   cart = cart ? JSON.parse(cart) : [];

//   const productsContain = document.querySelector(".products-contain");
//   const totalPriceLabel = document.querySelector("#totalPrice");
//   const totalItemsLabel = document.querySelector("#totalItems");
//   const selectAllCheckbox = document.querySelector("#selectAll");
//   const deleteButton = document.querySelector(".txtXoa");

//   function formatPrice(price) {
//     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
//   }

//   function parsePrice(priceString) {
//     return parseInt(priceString.replace(/\./g, "").replace(" đ", ""));
//   }

//   function displayCartItems() {
//     const productsContain = document.querySelector(".products-contain");
//     productsContain.innerHTML = "";
//     let total = 0;
//     let totalItems = 0;

//     cart.forEach((product, index) => {
//       const price = parsePrice(product.price);
//       const quantity = product.quantity || 1;
//       const totalPrice = price * quantity;

//       total += totalPrice;
//       totalItems += quantity;

//       const productHTML = `
//             <tr>
//                 <td class="text-center">
//                     <input type="checkbox" class="product-checkbox" data-index="${index}">
//                 </td>
//                 <td class="text-center">
//                     <img src="${
//                       product.img
//                     }" alt="Product Image" class="img" style="width: 80px;">
//                     <span class="ms-2">${product.title}</span>
//                 </td>
//                 <td class="text-center">${formatPrice(price)}</td>
//                 <td class="text-center">
//                     <div class="amountCo d-flex flex-row justify-content-center align-items-center">
//                         <img class="me-2 minus-amount" src="../IMG/Logo/minus.png" alt="Decrease" data-index="${index}">
//                         <input type="text" value="${quantity}" class="text-center amount-num" data-index="${index}" style="width: 40px;">
//                         <img class="ms-2 plus-amount" src="../IMG/Logo/plus.png" alt="Increase" data-index="${index}">
//                     </div>
//                 </td>
//                 <td class="text-center">${formatPrice(totalPrice)}</td>
//                 <td class="text-center">
//                     <button class="delete btn btn-danger" data-index="${index}">Xóa</button>
//                 </td>
//             </tr>
//         `;
//       productsContain.innerHTML += productHTML;
//     });

//     totalItemsLabel.innerText = totalItems;
//     totalPriceLabel.innerText = formatPrice(total);
//   }

//   function updateQuantity(index, newQuantity) {
//     if (newQuantity > 0) {
//       cart[index].quantity = newQuantity;
//       localStorage.setItem("cart", JSON.stringify(cart));
//       displayCartItems();
//     }
//   }

//   function deleteProduct(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCartItems();
//   }

//   selectAllCheckbox.addEventListener("change", function () {
//     const checkboxes = document.querySelectorAll(".product-checkbox");
//     checkboxes.forEach((checkbox) => {
//       checkbox.checked = selectAllCheckbox.checked;
//     });
//   });

//   deleteButton.addEventListener("click", function () {
//     const selectedIndexes = [];
//     const checkboxes = document.querySelectorAll(".product-checkbox");
//     checkboxes.forEach((checkbox, index) => {
//       if (checkbox.checked) {
//         selectedIndexes.push(index);
//       }
//     });

//     for (let i = selectedIndexes.length - 1; i >= 0; i--) {
//       cart.splice(selectedIndexes[i], 1);
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCartItems();
//   });

//   productsContain.addEventListener("click", function (e) {
//     const target = e.target;
//     const index = target.getAttribute("data-index");

//     if (target.classList.contains("minus-amount")) {
//       const quantity = parseInt(cart[index].quantity || 1);
//       updateQuantity(index, quantity - 1);
//     }

//     if (target.classList.contains("plus-amount")) {
//       const quantity = parseInt(cart[index].quantity || 1);
//       updateQuantity(index, quantity + 1);
//     }

//     if (target.classList.contains("delete")) {
//       deleteProduct(index);
//     }
//   });

//   displayCartItems();
// });








// // ============================Auth=============================
// document.addEventListener("DOMContentLoaded", function () {
//   const avatarIcon = document.getElementById("avatar-icon");
//   const accountLink = document.getElementById("account-link");
//   const logoutLink = document.getElementById("logout-link");
//   const loginForm = document.getElementById("login-form");
//   const registrationForm = document.getElementById("registration-form");

//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//   if (loggedInUser) {
//     changeAvatar(loggedInUser.avatar);
//     showLogout();
//   }

//   registrationForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const existingUser = users.find((user) => user.email === email);

//     if (existingUser) {
//       showError("Email đã tồn tại");
//       return;
//     }

//     const avatar = "../IMG/Logo/219983.png";
//     users.push({ name, email, password, avatar });
//     localStorage.setItem("users", JSON.stringify(users));

//     Swal.fire({
//       icon: "success",
//       title: "Đăng ký thành công!",
//       text: "Bạn có thể đăng nhập ngay bây giờ.",
//       timer: 2000,
//       showConfirmButton: false
//     });

//     registrationForm.reset();
//   });

//   loginForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const email = document.getElementById("login-email").value.trim();
//     const password = document.getElementById("login-password").value.trim();

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (user) {
//       Swal.fire({
//         icon: "success",
//         title: "Đăng nhập thành công!",
//         text: "Chào mừng " + user.name,
//         timer: 2000,
//         showConfirmButton: false
//       }).then(() => {
//         localStorage.setItem("loggedInUser", JSON.stringify(user));

//         changeAvatar(user.avatar);
//         showLogout();
//       });
//     } else {
//       showError("Email hoặc mật khẩu không chính xác.");
//     }
//   });

//   logoutLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     localStorage.removeItem("loggedInUser");
//     resetAvatar();
//     showLogin();

//     Swal.fire({
//       icon: "success",
//       title: "Đã đăng xuất!",
//       text: "Bạn đã đăng xuất thành công.",
//       timer: 2000,
//       showConfirmButton: false
//     });
//   });

//   function changeAvatar(avatar) {
//     avatarIcon.src = avatar;
//   }

//   function resetAvatar() {
//     avatarIcon.src = "../IMG/Logo/219983.png";
//   }

//   function showLogout() {
//     accountLink.style.display = "none";
//     logoutLink.style.display = "inline-block";
//   }

//   function showLogin() {
//     accountLink.style.display = "inline-block";
//     logoutLink.style.display = "none";
//   }

//   function showError(message) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: message,
//       timer: 2000,
//       showConfirmButton: false
//     });
//   }
// });

function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', function () {
    let card = this.closest('.card');
    let productId = card.getAttribute('data-id');
    let productName = card.querySelector('.card-title').textContent;
    let productPrice = card.querySelector('.card-text').textContent.trim();
    let productImage = card.querySelector('.card-img-top').src;

    let product = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    };

    let cart = loadCart();

    let existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push(product);
    }

    saveCart(cart);

    // Show success toast notification
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = `${productName} đã được thêm vào giỏ hàng.`; // Display product name in toast

    const toastElement = new bootstrap.Toast(document.getElementById('liveToast'));
    toastElement.show(); // Show the toast
  });
});

function loadCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
  let cart = loadCart();
  let productsContain = document.querySelector('.products-contain');
  let totalItems = document.getElementById('totalItems');
  let totalPrice = document.getElementById('totalPrice');

  productsContain.innerHTML = '';

  let total = 0;
  cart.forEach((product, index) => {
    // Remove any non-digit characters (commas, periods) for calculation
    let rawPrice = product.price.replace(/[^\d]/g, ''); // Remove commas, periods, and 'đ'
    let price = parseInt(rawPrice);

    let row = document.createElement('tr');
    row.setAttribute('data-id', product.id);

    // Format the price for display (adding periods for thousands)
    let formattedPrice = price.toLocaleString('en'); // Formats the number with commas as thousand separator
    let formattedTotal = (price * product.quantity).toLocaleString('en');

    row.innerHTML = `
      <td class="text-center">
          <input type="checkbox" class="product-checkbox">
      </td>
      <td class="text-center">
          <img src="${product.image}" alt="${product.name}"/>
          <p>${product.name}</p>
      </td>
      <td class="text-center">${formattedPrice} VND</td>
      <td class="text-center">
          <input type="number" class="quantity" value="${product.quantity}" min="1" />
      </td>
      <td class="text-center" data-total>${formattedTotal} VND</td>
      <td class="text-center">
          <button class="btn btn-danger remove-item">Xóa</button>
      </td>
    `;

    productsContain.appendChild(row);
    total += price * product.quantity;
  });

  totalItems.textContent = cart.length;
  totalPrice.textContent = `${total.toLocaleString('en')} VND`;

  document.querySelectorAll('.quantity').forEach((input, index) => {
    input.addEventListener('input', function () {
      let cart = loadCart();
      cart[index].quantity = parseInt(this.value);
      saveCart(cart);
      updateCartDisplay();
    });
  });

  document.querySelectorAll('.remove-item').forEach((button, index) => {
    button.addEventListener('click', function () {
      let cart = loadCart();
      cart.splice(index, 1);
      saveCart(cart);
      updateCartDisplay();
    });
  });
}

document.getElementById('selectAll').addEventListener('change', function () {
  let checkboxes = document.querySelectorAll('.product-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.checked = this.checked;
  });
});

document.querySelector('.txtXoa').addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('.product-checkbox:checked');
  let cart = loadCart();

  checkboxes.forEach(checkbox => {
    let row = checkbox.closest('tr');
    let productId = row.getAttribute('data-id');
    cart = cart.filter(item => item.id !== productId);
  });

  saveCart(cart);
  updateCartDisplay();
});

updateCartDisplay();
