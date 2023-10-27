import React, { useState, useEffect } from "react";

export default function MyData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/1")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);


    return (
        <React.Fragment>
            <div>
                <h1>
                    {data.title}
                </h1>
                <div>
                    {data.brand}
                </div>

                <div style={{ display:"inline-flex", margin: "0 -5px"}}>
                    <table>
                        <tbody>
                            {data.images.map((item, index) => {
                                return (


                                    <img key={index} src={item} thumbnail responsive style={{ width: "490px", height: "270px", margin: "0 5px"  }} alt=" " />


                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}