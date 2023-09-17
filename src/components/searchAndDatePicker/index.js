import React, {useState} from 'react';
import classes from './style.module.css';
import SearchIcon from "../icons/searchIcon";
import DatePickerIcon from "../icons/datePickerIcon";
import DatePicker from "../DatePicker/DatePicker";

const SearchAndDatePicker = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [searchTour, setSearchTour] = useState('')
    console.log(dateRange)

    return (
        <div className={classes.searchAndDatePicker}>
                <div className={classes.box}>
                    <SearchIcon/>
                    <input
                        type="text"
                        className={classes.search}
                        placeholder={'Куда поедем?'}
                        onChange={(e) => setSearchTour(e.target.value)}
                    />
                </div>
                <div className={classes.box}>
                    <DatePickerIcon/>
                    <DatePicker
                        startDate={startDate}
                        endDate={endDate}
                        setDateRange={setDateRange}
                    />
                </div>
                <button
                    className={classes.searchBtn}
                >
                    Найти
                </button>
        </div>
    );
};

export default SearchAndDatePicker;