import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form'
// Styles
import styles from './Page.module.css'

const Page = () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* Form */}
                <Form/>
                {/* Error */}
                {/* Loader */}
                {/* Froecast */}
            </div>
        </Fragment>
    );
};

export default Page;
