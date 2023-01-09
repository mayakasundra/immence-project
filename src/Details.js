import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css'
// import { useParams } from 'react-router';

const Details = () => {
    let params = useParams();
    console.log(params);
    let [receipe, setReceipe] = useState();
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
            .then((response) => {
                // console.log(response);
                return response.json()
            })

            .then((data) => {
                setReceipe(data.meals[0])
                console.log(data.meals);
            }
            );

    }, [])

    return receipe ?
        <Card sx={{ minWidth: 25 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} gutterBottom>
                    <b> Receipe Details</b>
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <b> {receipe.strMeal}</b>
                </Typography>
                <Typography variant="h6" component="div">
                    {receipe.strCategory}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* {receipe.image} */}
                    <img
                        src={receipe.strMealThumb}
                        alt={receipe.strCategory}
                        className="receipeImage"
                    />
                </Typography>
                <Typography variant="body2">
                    Description:  {receipe.strInstructions}
                    <br /> <br />

                </Typography>

                {/* <Typography variant="body2">
                    <b> Category: {receipe.category}</b>
                    <br />

                </Typography> */}
            </CardContent>
            <CardActions>
                {/* <Button variant="contained" onClick={onBack}>Go To List</Button> */}
                <Link to="/">

                    <Button variant="contained">Go To List</Button>
                </Link>
            </CardActions>
        </Card>
        : null
}

export default Details