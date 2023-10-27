import axios from "axios"
import React, { useEffect, useState } from "react"

const Header = () => {

    const [data, setData] = useState({
        First: "",
        Second: "",
        total: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((data) => ({ ...data, [name]: value }))

    }

    const Submit = () => {
        const { First, Second } = data;
        const total = Number(First) + Number(Second);
        setData((data) => ({ ...data, total: total }))

    }

    const Reset = () => {
        setData({
            First: "",
            Second: "",
            total: ""
        })

    }


    return (
        <div style={{ padding: "10px" }}>

            <h2>Adding two numbers</h2>
            <input placeholder="First Number"
                type="number"
                name="First"
                onChange={handleChange} value={data.First}
                style={{ padding: "5px", display: "block", width: "120px", marginBottom: "5px" }}
            />

            <input
                placeholder="Second Number"
                type="number"
                name="Second"
                onChange={handleChange} value={data.Second}
                style={{ padding: "5px", display: "block", width: "120px", marginBottom: "5px" }}
            />
            <button style={{ padding: "5px 10px", margin: "10px 0", backgroundColor: "#eb4010", color: "white", border: "2px solid rgb(252, 250, 250)" }}
                onClick={Submit}>Add</button>
            <button style={{ padding: "5px 10px", margin: "10px 0", backgroundColor: "#eb4010", color: "white", border: "2px solid rgb(252, 250, 250)" }}
                onClick={Reset}>Clear</button>
            <p>Total : {data.total || ""}</p>
        </div>
    )
}

export default Header;