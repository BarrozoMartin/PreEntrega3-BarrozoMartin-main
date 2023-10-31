import Cart from "../components/pages/Cart/Cart";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import CheckoutOficial from "../components/pages/checkoutOficial/CheckoutOficial";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "ferreteria",
    path: "/ferreteria",
    Element: ItemListContainer,
  },
  {
    id: "farmacia",
    path: "/farmacia",
    Element: ItemListContainer,
  },
  {
    id: "indumentaria",
    path: "/indumentaria",
    Element: ItemListContainer,
  },
  {
    id: "electronica",
    path: "/electronica",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detalles",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutOficial,
  },
];



