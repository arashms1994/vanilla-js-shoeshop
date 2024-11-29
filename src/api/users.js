import { BaseUrl } from "/src/api/config";

export async function GetUsers() {
  const response = await fetch(`${BaseUrl}/users`);
  const users = await response.json();
  return users;
}

export async function GetUsersId(id) {
  const response = await fetch(`${BaseUrl}/users/${id}`);
  const user = await response.json();
  return user;
}

export async function addUser() {
  let userList = await users();
  let newId =
    userList.length > 0
      ? Math.max(...userList.map((user) => parseInt(user.id))) + 1
      : 1;

  fetch(`${BaseUrl}/users`, {
    method: "POST",
    body: JSON.stringify({
      id: `${newId}`,
      name: name,
      email: email,
      password: password,
      cart: [],
      orders: [],
      wishlist: [],
    }),
  });
}
// Add to cart
export async function addToCart(product) {
  try {
    //To get the logged-in user
    function getUser() {
      let user = localStorage.getItem("userId");
      if (!user) {
        user = sessionStorage.getItem("userId");
        if (!user) {
          router.navigate("/Login");
        }
        return user;
      } else {
        return user;
      }
    }

    //get the user ID
    let userId = getUser();
    //Fetch the user data
    let response = await fetch(`${BaseUrl}/users/${getUser()}`);
    let person = await response.json();

    //Get the current cart or initialize an empty array
    let cartList = person.carts || [];

    console.log(product.productId);
    //Check if product exists
    const existingProduct = cartList.find(
      (cartProduct) => cartProduct.productId === product.productId
    );

    if (existingProduct) {
      //if the product exists increment the quantity
      existingProduct.qty =
        parseInt(existingProduct.qty, 10) + parseInt(product.qty, 10);
    } else {
      //if not add to the cart
      cartList.push(product);
    }
    const updateResponse = await fetch(`${BaseUrl}/users/${userId}`, {
      method: "PATCH", // Fixed typo
      headers: {
        "Content-Type": "application/json", // Added required header
      },
      body: JSON.stringify({
        carts: cartList,
      }),
    });

    if (!updateResponse.ok) {
      throw new Error(
        `Failed to update cart: ${updateResponse.status} ${updateResponse.statusText}`
      );
    }

    // Check if the response is okay

    // Fetch and log updated users
    const users = await GetUsers(); // Await async function
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}
//delete a user by their id

//delete all users
export async function deleteAllUsers() {
  let usersList = await users();
  for (let user of usersList) {
    await fetch(`${BaseUrl}/users/${user.id}`, {
      method: "DELETE",
    });
  }
}
