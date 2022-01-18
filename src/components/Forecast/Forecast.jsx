import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types'

//Components
import CurrentDay from '../CurrentDay/CurrentDay'
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription'
import UpcomingDaysForecast from '../UpcomingDaysForecast/UpcomingDaysForecast'

import styles from './Forecast.module.css';

const Forecast = ({forecast}) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay}/>
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecast.currentDayDetails}/>
                <UpcomingDaysForecast days={forecast.UpcomingDay}/>
            </Col>
        </Row>
    </Container>
);

Forecast.propTypes = {
    forecast: propTypes.shape({
        currentDay: propTypes.object,
        currentDayDetails: propTypes.array,
        UpcomingDay: propTypes.array
    })
}

export default Forecast;
