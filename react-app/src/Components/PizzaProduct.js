import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
class PizzaProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            order: []
        };
    }

    handleSubmit(pizza) {
        var today = new Date();
        fetch('/registerOrder', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderTime: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                orderedPizzaName: pizza.name,
                imageUrl: pizza.imageUrl,
                doughType: pizza.doughType,
                sauceType: pizza.sauceType,
                sizeType: pizza.size
            })
        })

    }

    confirmOrder(pizza) {
        let isConfirmed = window.confirm("Add this order to cart?")
        if (isConfirmed) {
            this.handleSubmit(pizza)
        } else {
            alert("Product haven't been added to cart!")
        }
    }

    render() {
        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));

        const { pizzas } = this.props.data

        return (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {pizzas.map(pizza =>
                    <Grid item xs={4}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }} key={pizza.id} >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={pizza.imageUrl}
                                    alt="pizza_image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pizza.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {pizza.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => {
                                        this.confirmOrder(pizza);
                                    }}>
                                        Order pizza
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default PizzaProduct;