import {render} from "@testing-library/react"
import Header from "../Navbar"
import { Provider } from "react-redux";
import store from "../../Utils/store";
import {StaticRouter} from "react-router-dom/server"

test("logo should load on rendering header",()=>{
    const header = render(
        <StaticRouter>
             <Provider store={store}>
                 <Header/>
             </Provider>
        </StaticRouter>
    )
    const logo = header.getAllByTestId('logo');
    console.log(logo);   
    // console.log(header);

   expect(logo[0].src).toBe("https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg")

})

test("cart should have 0 items",()=>{
    const header = render(
        <StaticRouter>
             <Provider store={store}>
                 <Header/>
             </Provider>
        </StaticRouter>
    )
    const cart = header.getByTestId('cart-items');
    console.log(cart);   
    // console.log(header);

   expect(cart.innerHTML).toBe("cart - 0")

})