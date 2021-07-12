import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./PendingSelection.module.css";
import Link from "next/link";
import { Box, Button } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(serial, name, date, projectnum, message) {
  return { serial, name, date, projectnum, message };
}

const rows = [
  createData(
    1,
    "John Doe",
    "23/12/2020",
    17,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit deleniti voluptatum quidem aliquam impedit"
  ),
  createData(
    2,
    "John Doe",
    "23/12/2020",
    17,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit deleniti voluptatum quidem aliquam impedit"
  ),
];

export default function JobProposalTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell>Serial</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Apply Date</TableCell>
            <TableCell align="center">Total Project</TableCell>
            <TableCell align="center">Sent Message</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.serial}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="center">{row.projectnum}</TableCell>
              <TableCell align="left">{row.message}</TableCell>
              <TableCell align="left">
                <Box className="flex">
                  <Link href="/valueseeker/dashboard/pending-selection/valueseeker-profile">
                    <Button size="small"> View Profile</Button>
                  </Link>
                  <Link href="/chat">
                    <Button size="small">Chat</Button>
                  </Link>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
