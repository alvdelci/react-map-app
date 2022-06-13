import React from "react";

const GetData = () => {
    
    return (
        <>
        <div style={{width: "100px", background: "orange", borderRadius: "10px"}}>
            <label>Suas opções</label><br />
            <label htmlFor="">Opção 1</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Opção 2</label>
            <input type="checkbox" name="" id="" /><br />
            <label htmlFor="">Opção 3</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Opção 4</label>
            <input type="checkbox" name="" id="" /><br />
        </div>
        </>
    );
}

export default GetData;