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

    const {error, isLoading, isForecast} = useForcast()

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {!isLoading && <Form/>}
                {error && <Error message={error}/>}
                {isLoading && <Loader/>}
            </div>
                {isForecast && <Forecast/>}
        </Fragment>
    );
};

export default Page;
