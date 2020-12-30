import React from 'react';
import user from './../DashboardJson';
import './../App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
      padding:10,
      fontWeight:"bold",
      paddingLeft:5,
      backgroundColor:'black',
      color:'white'
  
    },
    body: {
      fontSize: 12,
      padding:15,
      color:'black'
    },
  }))(TableCell);


function Dashboard() {

    const history = useHistory();
    if(localStorage.login!=="true") {
        history.push('/');
    }
    
    return (
        <div>
           <h1 className="heading">Dashboard</h1>
           <TableContainer component={Paper} className="tableformat" >
      <Table aria-label="customized table" > 
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Age</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {user.user.map((item)=>{
        return(
        <TableRow className="tablerow" key={item.id} >
        <StyledTableCell align="left">{item.name}</StyledTableCell>
        <StyledTableCell align="left">{item.age}</StyledTableCell>
        <StyledTableCell align="left">{item.gender}</StyledTableCell>
        <StyledTableCell align="left">{item.email}</StyledTableCell>
      </TableRow>
      )})}
   </TableBody>
      </Table>
    </TableContainer>
     

        </div>
    )
}

export default Dashboard;
