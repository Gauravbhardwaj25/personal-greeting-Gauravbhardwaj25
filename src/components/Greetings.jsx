import React, { useState } from 'react';

function Greetings() {

    const[name, setName] = useState("")
// const [name, setName] =usestate("");
    
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>


                <h2 style={{ marginTop: "20px", color: "#2c3e50" }}>
                    Hello, {name}!
                </h2>

            </div>

        </>  
    )
}

export default Greetings