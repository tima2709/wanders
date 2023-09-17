import React from 'react';
import Flatpickr from "react-flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import "flatpickr/dist/flatpickr.css";
import './datepicker.css';

const DatePicker = ({startDate, endDate, setDateRange}) => {

    const options = {
        locale: {
            ...Russian,
            months: {
                ...Russian.months,
                shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Ноя", "Дек",],
                longhand: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
            }
        },
        monthSelectorType: 'static',
        minDate: new Date(),
        altFormat: "J M ",
        altInput: false,
        dateFormat: 'd F',
        mode: 'range',
        enableTime: false,
        startDate: startDate,
        endDate: endDate,
    };
    return (
        <div>
            <Flatpickr
                placeholder="Когда?"
                className={'datePicker'}
                options={options}
                data-enable-time
                // value={dateRange}
                onChange={(date) => {
                    setDateRange( date );
                }}
            />
        </div>
    );
};

export default DatePicker;