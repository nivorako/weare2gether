// import User from "./../assets/user4.svg";
// import User1 from "./../assets/user3.svg";
// import ShopBskt from "./../assets/shopBskt.svg";
// import ShoppingBskt from "./../assets/shoppingBskt.svg";
// import Menu from "./../assets/menu.svg";
// import MenuWhite from "./../assets/menuWhite.svg";
// import {
//     changeColor,
//     changeToolbarColor,
//     changeUser,
//     changeShopBskt,
//     changeMenu,
//     changeBoxShadow,
// } from "../features/toolbarSlice";

// export function handleScroll(dispatch) {
//     const aboutSection = document.getElementById("about");
//     const guestSection = document.getElementById("guest");
//     const scrollY = window.scrollY;

//     if (aboutSection) {
//         const aboutSectionOffset = aboutSection.offsetTop;
//         if (scrollY >= aboutSectionOffset) {
//             dispatch(changeToolbarColor("white"));
//             dispatch(changeColor("black"));
//             dispatch(changeShopBskt(ShoppingBskt));
//             dispatch(changeUser(User1));
//             dispatch(changeMenu(Menu));
//             dispatch(changeBoxShadow("lightgrey"));
//         } else {
//             dispatch(changeToolbarColor("var(--primary)"));
//             dispatch(changeColor("white"));
//             dispatch(changeShopBskt(ShopBskt));
//             dispatch(changeUser(User));
//             dispatch(changeMenu(MenuWhite));
//             dispatch(changeBoxShadow("var(--primary)"));
//         }
//     }

//     if (guestSection) {
//         const guestSectionOffset = guestSection.offsetTop;
//         if (scrollY >= guestSectionOffset) {
//             dispatch(changeToolbarColor("var(--primary)"));
//             dispatch(changeColor("white"));
//             dispatch(changeShopBskt(ShopBskt));
//             dispatch(changeUser(User));
//             dispatch(changeMenu(MenuWhite));
//             dispatch(changeBoxShadow("var(--primary)"));
//         }
//     }
// }
