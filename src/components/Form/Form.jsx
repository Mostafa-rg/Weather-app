import React,{useState} from 'react';
import propTypes from 'prop-types';

// Styles
import styles from './Form.module.css';

const Form = ({submitSearch}) => {

    const [location, setLocation] = useState('')

    const submitHandler = event => {
        event.preventDefault();
        if(!location || location === '') return;
        submitSearch(location)

    }

    return (
        <form onSubmit={submitHandler}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={event => setLocation(event.target.value)}
            />

            <button type="submit" className={styles.button} onClick={submitHandler}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: propTypes.func.isRequired
}

export default Form;
