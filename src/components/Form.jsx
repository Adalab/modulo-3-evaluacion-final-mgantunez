import PropTypes from 'prop-types';

function Form({ handleInputFilterMovie, filterMovie, filterYear, handleSelectFilterYear, finalYear }) {

    return (

        <form>


            {/*Filtro por nombre de película*/}
            <input
                className="form__search"
                autoComplete="off"
                type="search"
                name="search"
                placeholder="Filtrar por película"
                onInput={handleInputFilterMovie}
                value={filterMovie}
            />

            {/*Filtro por año*/}

            <select className="form__search" name="searchYear" value={filterYear} onChange={handleSelectFilterYear}>
                <option value="">Filtrar por año</option>
                {finalYear.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

        </form>
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