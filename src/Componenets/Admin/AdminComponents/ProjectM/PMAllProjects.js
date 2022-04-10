import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Portal, Skeleton } from '@mui/material';

const PMAllProjects = ({ container }) => {
    const [projects, setProjects] = useState([])
    const [loding, setLoding] = useState(false)

    useEffect(() => {
        setLoding(true)
        fetch('http://localhost:2001/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
            .finally((res) => setLoding(false))
    }, [])
     return (
        <Portal container={container.current}>
            <TableContainer sx={{ backgroundColor: 'transparent', 'td,tr,th': { color: 'white', borderColor: '#302F4E' } }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" >Project Name</TableCell>
                            <TableCell align="right">Post Date</TableCell>
                            <TableCell align="right">Post Modified date</TableCell>
                            <TableCell align="right">Links</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loding ? (Array.from(new Array(6))).map(e =>
                            <TableCell scope="row"><Skeleton animation="wave" sx={{ bgcolor: 'red.900', borderRadius: '10px' }} height='30px' />
                            </TableCell>

                        ) : projects.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0, borderColor: 'lightgray' } }}
                            >
                                <TableCell component="th" scope="row">{row.websiteName}</TableCell>
                                <TableCell align="right">{row.createDate}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">
                                    <small>
                                        <a href={row.liveLink}>Goto the website</a><br />
                                        <a href={row.serverLink}>Server side link</a><br />
                                        <a href={row.clientLink}>Client side link</a>
                                    </small>

                                </TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Portal>
    );
};

export default PMAllProjects;