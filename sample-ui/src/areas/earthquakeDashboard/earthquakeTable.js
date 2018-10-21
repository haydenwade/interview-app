import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import api from '../../apis/earthquakesApi';

class EarthQuakesTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            earthquakes:[]
        }
    }
    componentDidMount() {
        api.getEarthquakes().then((earthquakes) => {
            this.setState({ ...this.state, earthquakes});
        });
    }
    renderRow(earthquake, i) {
        return (
        <tr key={i}>
            <td>{earthquake.id}</td>
            <td>{earthquake.properties.mag}</td>
            <td>{earthquake.properties.place}</td>
        </tr>
        );
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12} xs={12}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Magnitude</th>
                                    <th>Place</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.earthquakes ? this.state.earthquakes.map((earthquake, i) => {
                                        return this.renderRow(earthquake, i);
                                    }) :  <tr>
                                    <td>No Records</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default EarthQuakesTable;