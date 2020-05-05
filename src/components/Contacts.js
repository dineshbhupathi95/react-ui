import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, IconButton, Table,TableHead,TableBody ,TableRow, TableCell, TablePagination,} from '@material-ui/core';
import {Button, TextField} from '@material-ui/core';
import axios from 'axios'
import TopAppBar from './Topbar'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TabsApp from './Tabs'
import SendDialog from './dialogs/SendMailDialog';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        minHeight: '70vh',
        overflowX: 'auto',
        margintop: '26'        
    },
    table: {
        minWidth: '100%'
    },
});

export default function UsersTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [users, setUsers] = React.useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

   React.useEffect(()=>{
	getUsers()
   },[])
    const getUsers=()=>{
       axios.get('https://djangosalesforce.herokuapp.com/users/').then(response=>{
        console.log(response.data)
    setUsers(response.data)}
    )}
    return (
        <div>
       <SendDialog />
        <Paper className={classes.root}>              
            <Table className={classes.table} size="medium" aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="left"></TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.length>0?users.slice(page * rowsPerPage, page *  rowsPerPage + rowsPerPage).map(user => (
                        <TableRow key={user.id}>
                            <TableCell align="left">
                             <FormControlLabel control={<Checkbox value="remember" color="primary" />}/></TableCell>          
                            <TableCell align="left">{user.Title}</TableCell>
                            <TableCell align="left">{user.FirstName} {user.LastName}</TableCell>
			    <TableCell align="left">{user.Email}</TableCell>
			    <TableCell align="left">{user.Phone}</TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
            {users.length>=5? <TablePagination
                rowsPerPageOptions={[5,10,20]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />:null}
            </Paper>
        </div>
    );
}