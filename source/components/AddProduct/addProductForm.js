import React from 'react';
import { useForm } from 'react-hook-form';
import { AddProduct } from "../API-Communication/addProduct";

export function AddProductForm() {
    const { register, handleSubmit, errors } = useForm();
      
    async function onSubmit (data) {
        await AddProduct(data);
        
        //Should be checking for error before
        event.target.reset();
        alert(data.name + " Är tillagd")
    }

    const inputStyle = {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}><br/>
        <fieldset>
        <legend>Lägg till produkt</legend>
            <label>Kategori</label>
            <select style={inputStyle} name="category" ref={register({ required: true })}>
                <option value="Dam">Dam</option>
                <option value="Herr">Herr</option>
                <option value="Barn">Barn</option>
            </select><br/>

            <label>Produktnamn</label>
            <input style={inputStyle} type="text" placeholder="name" name="name" ref={register({required: true, maxLength: 20})} />
            {errors.name && <span style={{color: "red"}}>Du måste ange ett produktnamn<br/></span>}<br/>
            
            <label>Pris</label>
            <input style={inputStyle} type="number" placeholder="pris" name="price" ref={register({required: true, max: 10000, min: 1})} />
            {errors.pris && <span style={{color: "red"}}>Du måste ange ett pris över 1 kr<br/></span>}
            <br/>

            <label>Beskrivning</label>
            <textarea style={inputStyle} type="text" placeholder="beskrivning" name="description" ref={register({required: true})} />
            {errors.pris && <span style={{color: "red"}}>Du måste ange en beskrivning av varan<br/></span>}
            <br/>

            <label>Bildnamn</label>
            <input style={inputStyle} type="text" placeholder="bildnamn" name="picName" ref={register({required: true, maxLength: 40})} />
            {errors.name && <span style={{color: "red"}}>Du måste ange ett filnamn för bilden<br/></span>}<br/>

            <label>Utvald</label>
            <input type="checkbox" placeholder="selected" name="selected" ref={register} /><br/><br/>

            <input type="submit" value="Spara" /><br/>
        </fieldset>
        </form>
  );
}

