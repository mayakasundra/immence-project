import React, { useEffect, useState } from 'react'
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';


const Categories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => {

                return response.json()
            })

            .then((data) => {
                setProducts(data.categories)
                // console.log(data.categories);
            });

    }, [])

    return products.length ? (


        <Stack
            direction="row"
            justifyContent="center"
            // alignItems="center"
            spacing={0}
            sx={{ flexWrap: 'wrap', gap: 1 }}
        >
            {products.map((value) => (

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={value.strCategoryThumb}
                        title={value.strCategory}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {value.strCategory}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {value.strCategoryDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Link to={`/${value.strCategory}`}> <Button variant="contained">Show Recipe</Button></Link>

                    </CardActions>
                </Card>

            ))}
        </Stack>

    ) : null;


}

export default Categories