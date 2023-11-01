import Multiselect from 'multiselect-react-dropdown';

const state = {
    options: [
        {name: 'Кыргызский сом, KGZ', id: 1, slug: 'kgs'},
        {name: 'Российский рубль, RUB', id: 2, slug: 'rub'},
        {name: 'Доллар США, USD', id: 3, slug: 'usd'}
    ]
};


const TourCurrency = ({onSelect}) => {

    return (
        <div>
            <h5 className={'title-price'}>Валюта тура</h5>
            <Multiselect
                options={state.options} // Options to display in the dropdown
                onSelect={(e) => onSelect(e)} // Function will trigger on select event
                onRemove={(e) => onSelect(e)} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                showCheckbox
                placeholder={'Валюта'}
            />
        </div>
    );
};



export default TourCurrency;