function Form() {

    return (
        <form>

            <input
                className="form__search"
                autoComplete="off"
                type="search"
                name="search"
                placeholder="Filtrar por película"
                value=""
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

export default Form;