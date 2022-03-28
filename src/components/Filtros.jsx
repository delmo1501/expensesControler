import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {


    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filter Expenses</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value) }
                    >
                        <option value="">-- Categories --</option>
                        <option value="ahorro">Saves</option>
                        <option value="comida">Food</option>
                        <option value="casa">House</option>
                        <option value="gastos">Various</option>
                        <option value="ocio">Leisure</option>
                        <option value="salud">Health</option>
                        <option value="suscripciones">Subscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
