import * as React from 'react';
import { useState ,useEffect} from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../FeedbackMore/feedbackMore.css'
import {useSelector,useDispatch} from 'react-redux'
import replyPost from '../../Redux/Reply/replyPost'
import ReplayView from './replayView'
import replyView from '../../Redux/Reply/replyView'


export default function ReplyPopup({idEmp,f_id}:any) {
  // console.log("!!!!",idEmp,f_id)
  const [reply,setReply]=useState<string | any>('')
  const dispatch:any =useDispatch()
  const [open, setOpen] = React.useState(false);
  // console.log("f_id reply:",f_id);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const btnReply=()=>{
    dispatch(replyPost({id:idEmp,reply:reply,f_id:f_id}))
    // dispatch(replyView({id:idEmp,f_empId:f_id}))
    setReply('')
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Reply
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reply</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            value={reply}
            onChange={(e)=>setReply(e.target.value)}
            // type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        {/* <ReplayView replyEmpId={idEmp} replyFid={f_id}/> */}
        <DialogActions>
          <Button onClick={btnReply}>Reply</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}