import { render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";
import restaurant_list_url from "../../mocks/data";
import '@testing-library/jest-dom';


global.fetch = jest.fn(()=>{
  return Promise.resolve({
        json : async ()=>{
          return  await Promise.resolve(restaurant_list_url)
        }
    })
})

test("search results on homepage", async ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=>{
        expect(body.getByTestId("search-btn")).toBeInTheDocument();
    })

    // const shimmer = body.getByTestId("res-list");
    const resList = body.getByTestId("res-list");

    // expect(shimmer).toBeInTheDocument();    // it check is the function there or not (toBeTheDocument); for that you have to install a library
    // expect(shimmer.children.length).toBe(10);
    expect(resList.children.length).toBe(10);
    console.log(shimmer)
})