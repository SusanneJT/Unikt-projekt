import React from 'react';
import { useForm } from 'react-hook-form';

export function AddProductForm() {
    const { register, handleSubmit, errors } = useForm();
      
    const onSubmit = data => {
        const lsProducts = JSON.parse(localStorage.getItem('products')) || [];
        lsProducts.push(data);
        localStorage.setItem('products', JSON.stringify(lsProducts));
        event.target.reset();
        alert(data.name + " Är tillagd")
    };

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

            <label>Unikt id</label>
            <input style={inputStyle} type="number" placeholder="id" name="id" ref={register({required: true, max: 10000, min: 100})} />
            {errors.id && <span style={{color: "red"}}>Du måste ange ett unikt id med minst tre siffror<br/></span>}
            <br/> 

            <label>Utvald</label>
            <input type="checkbox" placeholder="selected" name="selected" ref={register} /><br/><br/>

            <input type="submit" value="Spara" /><br/>
        </fieldset>
        </form>
  );
}

