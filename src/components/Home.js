import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'


const Home = (props) => {
    console.log(props)
    return (
        <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            {props.businesses.map((business, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{business.name.toUpperCase()}</span>
                        <ul>
                        <li>Name {business["name"]}</li>
                        <li>Description {business["description"]}</li>
                        <li>Hours {business["hours"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/business/${business.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}
export default Home