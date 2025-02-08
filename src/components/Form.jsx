import PropTypes from 'prop-types';

function Form({ handleInputFilterMovie, filterMovie }) {

    return (
        <form>

            <input
                className="form__search"
                autoComplete="off"
                type="search"
                name="search"
                placeholder="Filtrar por película"
                onInput={handleInputFilterMovie}
                value={filterMovie}
            />

            <select className="form__search" name="searchYear">
                <option value="">Filtrar por año</option>
                {Array.from({ length: 2025 - 1990 + 1 }, (_, i) => {
                    const year = 1990 + i;
                    return <option key={year} value={year}>{year}</option>;
                })}
            </select>

        </form>
    );

}

Form.propTypes = {
    handleInputFilterMovie: PropTypes.func.isRequired,
    filterMovie: PropTypes.string.isRequired,
};

export default Form;