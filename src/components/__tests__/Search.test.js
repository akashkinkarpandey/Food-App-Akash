import React from 'react';
import { render,waitFor,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Body from "../Body"
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";
global.fetch=jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=> {return Promise.resolve(RESTAURANT_DATA)}
        }
    )
});
test("Shimmer should load on HomePage",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
            <Body />
            </Provider>
        </StaticRouter>
    );
    // const shimmer=body.getByTestId("shimmer");
    // expect(shimmer.children.length).toBe(10);
    // console.log(shimmer);
    await waitFor(() => {
        const shimmer=body.getByTestId("shimmer");
        expect(shimmer.children.length).toBe(10);
        // expect(shimmer.children.length).toBe(10);

      });
});
test("Restaurant should load on HomePage",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
            <Body />
            </Provider>
        </StaticRouter>
    );
    // const searchBtn=body.getByTestId("search-btn");
    // console.log(searchBtn);
    await waitFor(() => {
        const resList=body.getByTestId("res-list");
        expect(resList.children.length).toBe(15)
      });
});

test("Search for string(food) on HomePage",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
            <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => {
        const input=body.getByTestId("search-input");
        fireEvent.change(input,{target:{
            value:"food",
        }})
        //what i have to change,dummy event from where we get data as e.target.value
       
      });
      const searchBtn=body.getByTestId("search-btn");
      fireEvent.click(searchBtn)
      const resList=body.getByTestId("res-list");
      expect(resList.children.length).toBe(2)
});




