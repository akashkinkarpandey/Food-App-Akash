import { render } from "@testing-library/react";
import Header from "../Header.js";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"
test("Logo should load on rendering header",()=>{
    //Load Header
        const header=render(
    <StaticRouter>
        <Provider store={store}>
        <Header />
        </Provider>
    </StaticRouter>)
    //check if logo is loaded
    // console.log(header)
    const logo=header.getAllByTestId("logo");
    console.log(logo[0]);
    expect(logo[0].src).toBe("http://localhost/dummy.png"); 
})

test("Online status hould be green on rendering green",()=>{
    //Load Header
        const header=render(
    <StaticRouter>
        <Provider store={store}>
        <Header />
        </Provider>
    </StaticRouter>)
    //check if logo is loaded
    // console.log(header)
    const onlineStatus=header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("🟢");
})
test("Cart should have zero items on rendering render",()=>{
    //Load Header
        const header=render(
    <StaticRouter>
        <Provider store={store}>
        <Header />
        </Provider>
    </StaticRouter>)
    //check if logo is loaded
    // console.log(header)
    const cart=header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0");
})


