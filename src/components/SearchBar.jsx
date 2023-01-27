import React from "react";

export default function SearchBar({onSearch}){
    const [city, setCity] = useState("");
    return (
        <form onSubmit={ (e) =>{
            e.preventDefault();
            onSearch(city);
        }}>
            <imput 
                type="text"
                placeholder="ciudad..."
                value={city}
                onChange={ e => setCity(e.target.value)}
            />
            <imput type="submit" value="Agregar" />
        </form>
    )
}