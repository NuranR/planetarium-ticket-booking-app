import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateBooking = () => {
    const [booking, setBooking] = useState();
    const [open, setOpen] = React.useState(true);
    const[seatNumber, setSeatnumber] = React.useState('')
    const[date, setDate] = React.useState('')
    const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
    const {id} = useParams();

    useEffect(() => {
      
           
        fetch(`/booking/${id}`)
          .then((response) => console.log(response))
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
          
      }, [id]);

    const handleClose =async () => {
        
        
        const response = await fetch(`/booking/${id}`,
        {
            method:'POST',
            headers:{
                'Content-Type':"application/json",
            },
            body: JSON.stringify({seatNumber:seatNumber, date: date})
        })
        console.log(response)
        const res = await axios.put(`/booking/${id}`,{seatNumber, date})
        console.log(res)
        setOpen(false);


      };
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Booking</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="seatNumber"
            label="Seat Number"
            type={"number"}
            fullWidth
            variant="standard" onChange={(e) => setSeatnumber(e.target.value)}
            //value={inputs.date}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            //label="Date"
            type={"date"}
            fullWidth
            variant="standard" onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
  )
}

export default UpdateBooking