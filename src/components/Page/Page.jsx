import React, { Fragment } from 'react';

// Components
import Header from '../Header';
import Form from '../Form'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Forecast from '../Forecast/Forecast'

// Styles
import styles from './Page.module.css'

//Hooks
import useForcast from '../../hooks/useForcast';

const Page = () => {

    const {error, isLoading, isForecast, submitRequest} = useForcast()

    const submitHandler = value => {
        submitRequest(value)
    }

    return (
        <Fragment>
            <Header />
            {!isForecast &&
            <div className={`${styles.box} position-relative`}>
                {!isLoading && <Form submitSearch={submitHandler}/>}
                {error && <Error message={error}/>}
                {isLoading && <Loader/>}
            </div>}
                {isForecast && <Forecast forecast={isForecast} />}
        </Fragment>
    );
};

export default Page;
