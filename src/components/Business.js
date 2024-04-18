import React from 'react'
import { Container, Paper, Chip } from '@mui/material';
import { useParams } from 'react-router-dom';

const Business = (props) => {
    // const id = props.match.params.id

    const { id } = useParams();
    {/* Change cars to props.cars and remove the cars.json import above */}
    const business = props.businesses.find(b => b.id === id)
    
    
    return (
        <Container maxWidth="sm" className="business-container">
            <Paper className="business-paper">
                
                <h2>{business.name}</h2>
                {
                    Object.keys(business).map((key, idx) => {
                        return <Chip label={`${key}: ${business[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Business