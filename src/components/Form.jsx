import PropTypes from 'prop-types';

function Form({ handleInputFilterMovie, filterMovie, filterYear, handleSelectFilterYear, finalYear }) {

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    };

    return (

        <div>
            <h2 className="form__instructions">Busca una película con el nombre exacto en inglés y déjate sorprender por todas las veces que Owen Wilson dice WOW</h2>

            <form className="form" onSubmit={handleSubmit}>

                <div className="form__filters">

                    {/*Filtro por nombre de película*/}
                    <input
                        className="form__input"
                        autoComplete="off"
                        type="search"
                        name="search"
                        placeholder="Filtrar por película"
                        onInput={handleInputFilterMovie}
                        value={filterMovie}
                    />

                    {/*Filtro por año*/}

                    <select className="form__year" name="searchYear" value={filterYear} onChange={handleSelectFilterYear}>
                        <option value="">Filtrar por año</option>
                        {finalYear
                            .sort((a, b) => a - b)
                            .map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                    </select>
                </div>
            </form>
        </div>
    );
}

Form.propTypes = {
    handleInputFilterMovie: PropTypes.func.isRequired,
    filterMovie: PropTypes.string.isRequired,
    filterYear: PropTypes.string.isRequired,
    handleSelectFilterYear: PropTypes.func.isRequired,
    finalYear: PropTypes.array.isRequired,
};

export default Form;