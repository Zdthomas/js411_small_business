import React from 'react'
import { useEffect, useState } from 'react';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
// import AddBusiness from '../containers/AddBusiness';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBusiness from '../containers/AddBusiness';







 
const Dashboard = (props) => {
    console.log(props)

    const [online, setOnline] = useState(false);
    // const [notifications, setNotifications] = useState([]);

    const handleOnlineToggle = () => {

        setOnline(!online); 

      };
    
      

    //   useEffect(() => {

    //     // setNotifications([]);

    //     if (!online) {

    //         // setNotifications((prevNotifications) => [

    //         //   ...prevNotifications,

    //         //   "Your application is offline. You won't be able to share or stream music to other devices.",
    //         // ]);

    //       }}, [online]);




    return (
        <Container maxWidth="lg" className="business-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
                <AddBusiness businessTotal={props.businesses.length} />
                
                
            </div>

            {/* <Switch checked={online} onChange={handleOnlineToggle} /> */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business, idx) => (
                    <TableRow key={business.id}>
                        <TableCell component="th" scope="row">
                            {business.id}
                        </TableCell>
                        <TableCell>{business["name"]}</TableCell>
                        <TableCell>{business["description"]}</TableCell>
                        <TableCell>{business["address"]}</TableCell>
                        <TableCell>{business["hours"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeBusiness(idx)}
                                className="icon text-red" />
                        </TableCell>
                
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard