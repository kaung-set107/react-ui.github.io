import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { useState} from 'react'
import axios from 'axios'





export default function BankInfoDialog(props) {

  const [file, setFile] = useState('');
  const [remark, setRemark] = useState('');
  const [payamount, setPayamount] = useState('');
 

  const onFileChange = (event) => {  
    // Update the state
    setFile(event.target.files[0]);
   
  };

   const savefilename = () =>{
    
    let formdata={
      file:file,
      remark:remark,
      payamount: payamount,    
    }
     alert(JSON.stringify(formdata));
    axios.post('https://localhost:3000/api/storescreenshot', formdata,
    {
        headers: {
        'Content-Type': 'multipart/form-data'
    }
    }).then(res=>
        {
          alert('success')
        }
        ).catch(err =>{
          console.log('error');
        });
    document.getElementById('hidedialog').style.visibility = "hidden";
   }
  return (
    <div>
      <Dialog open={props.open} onClose={props.close} id="hidedialog">
        <DialogTitle>
          <b>User Paid Information</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Paid Info</DialogContentText>
          <form className="px-3 py-3">
            <div className="form-group ">
              <input
                type="file"
                id="myFile"
                onChange={onFileChange}
                className="form-control border-blue px-3 py-3"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="payamount"
                name="payamo"
                placeholder="Pay Amount"
                className="form-control px-3 py-3 mb-2 mt-1"
                onChange={(e) => setPayamount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="remark"
                name="remark"
                placeholder="Remark"
                className="form-control px-3 py-3"
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancle</Button>
          <Button onClick={savefilename}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


