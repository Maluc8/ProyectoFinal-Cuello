import { useState } from "react";

const CategorySelector = () => {
    const [selectedOption, setSelectedOption] = useState('All');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return <div id='selector'>
        <label htmlFor="category">Categorias:</label>
        <select id="category" value={selectedOption} onChange={handleSelectChange}>
            <option value="All">Todo</option>
            <option value="clasico">Clasico</option>
            <option value="gourmet">Gourmet</option>
            <option value="empanada">Empanada</option>
            <option value="bebidas">Bebidas sin alcohol</option>
            <option value="alcohol">Bebidas con alcohol</option>
        </select>
    </div>
}

export default CategorySelector