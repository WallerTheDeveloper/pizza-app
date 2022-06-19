import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import NavBarComponent from './NavBarComponent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import { useState } from 'react';

function EditOrder(props) {

    const [pizzaName, setPizzaName] = useState('');

    const [doughType, setDoughType] = useState('');
    const [sauceType, setSauceType] = useState('');
    const [sizeType, setSizeType] = useState('');

    const [orderTimeHours, setOrderTimeHours] = useState('')
    const [orderTimeMinutes, setOrderTimeMinutes] = useState('')
    const [orderTimeSeconds, setOrderTimeSeconds] = useState('')

    function parseOrderTime() {
        return orderTimeHours + ":" + orderTimeMinutes + ":" + orderTimeSeconds
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await fetch('/orders/' + props.match.params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderTime: parseOrderTime(),
                orderedPizzaName: pizzaName,
                doughType: doughType,
                sauceType: sauceType,
                sizeType: sizeType
            }),
        });
    }

    function successText() {
        <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
            Order updated:
        </Typography>
    }
    return (

        <div className="App">
            <NavBarComponent />
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 10 }}>Edit Your Order</Typography>
                < Form onSubmit={(e) => handleSubmit(e)} >
                    <FormGroup>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
                            Change pizza name:
                        </Typography>
                        <InputLabel id="pizzaName">Pizza name:</InputLabel>
                        <Select
                            labelId="pizzaName"
                            id="selectPizzaName"
                            onChange={(e) => setPizzaName(e.target.value)}
                            label="Pizza Name"
                        >
                            <MenuItem value={"Margherita"}>Margherita</MenuItem>
                            <MenuItem value={"Pepperoni"}>Pepperoni</MenuItem>
                            <MenuItem value={"Cheese Pizza"}>Cheese Pizza</MenuItem>
                            <MenuItem value={"Veggie Pizza"}>Veggie Pizza</MenuItem>
                            <MenuItem value={"Meat Pizza"}>Meat Pizza</MenuItem>
                            <MenuItem value={"Hawaiian Pizza"}>Hawaiian Pizza</MenuItem>
                            <MenuItem value={"BBQ Chicken Pizza"}>BBQ Chicken Pizza</MenuItem>
                            <MenuItem value={"Buffalo Pizza"}>Buffalo Pizza</MenuItem>
                            <MenuItem value={"Supreme Pizza"}>Supreme Pizza</MenuItem>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
                            Change order time:
                        </Typography>
                        <Row>
                            <Col>
                                <InputLabel id="orderTimeHours">HH:</InputLabel>
                                <Select
                                    labelId="orderTimeHours"
                                    id="selectOrderTimeHours"
                                    onChange={(e) => setOrderTimeHours(e.target.value)}
                                    label="HH:"
                                >
                                    <MenuItem value={"14"}>14</MenuItem>
                                    <MenuItem value={"15"}>15</MenuItem>
                                </Select>
                            </Col>
                            <Col>
                                <InputLabel id="orderTimeMinutes">MM:</InputLabel>
                                <Select
                                    labelId="orderTimeMinutes"
                                    id="selectOrderTimeMinutes"
                                    onChange={(e) => setOrderTimeMinutes(e.target.value)}
                                    label="MM:"
                                >
                                    <MenuItem value={"20"}>20</MenuItem>
                                    <MenuItem value={"21"}>21</MenuItem>
                                </Select>
                            </Col>
                            <Col>
                                <InputLabel id="orderTimeSeconds">SS:</InputLabel>
                                <Select
                                    labelId="orderTimeSeconds"
                                    id="selectOrderTimeSeconds"
                                    onChange={(e) => setOrderTimeSeconds(e.target.value)}
                                    label="SS:"
                                >
                                    <MenuItem value={"01"}>01</MenuItem>
                                    <MenuItem value={"02"}>02</MenuItem>
                                </Select>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
                            Change dough type:
                        </Typography>
                        <InputLabel id="doughType">Dough Type</InputLabel>
                        <Select
                            labelId="doughType"
                            id="selectDoughType"
                            onChange={(e) => setDoughType(e.target.value)}
                            label="Dough Type"
                        >
                            <MenuItem value={"THICK"}>THICK</MenuItem>
                            <MenuItem value={"THIN"}>THIN</MenuItem>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
                            Change size type:
                        </Typography>
                        <InputLabel id="sizeType">Size Type</InputLabel>
                        <Select
                            labelId="sizeType"
                            id="selectSizeType"
                            onChange={(e) => setSizeType(e.target.value)}
                            label="Size Type"
                        >
                            <MenuItem value={"SMALL"}>SMALL</MenuItem>
                            <MenuItem value={"AVERAGE"}>AVERAGE</MenuItem>
                            <MenuItem value={"BIG"}>BIG</MenuItem>
                            <MenuItem value={"XXL"}>XXL</MenuItem>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
                            Change sauce type:
                        </Typography>
                        <InputLabel id="sauceType">Sauce Type</InputLabel>
                        <Select
                            labelId="sauceType"
                            id="selectSauceType"
                            onChange={(e) => setSauceType(e.target.value)}
                            label="Sauce Type"
                            sx={{ marginBottom: '20px' }}
                        >
                            <MenuItem value={"TomatoSauce"}>Tomato Sauce</MenuItem>
                            <MenuItem value={"BBQSauce"}>BBQ Sauce</MenuItem>
                            <MenuItem value={"CreamSauce"}>Cream Sauce</MenuItem>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit" onClick={successText()}>Save</Button>{' '}
                    </FormGroup>
                </Form>
            </Container>
        </div >
    );
}
export default withRouter(EditOrder);