import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MUITable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '310px' }}>
      <Table aria-lable="simple table" stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Mira",
    last_name: "Shale",
    email: "mshale0@opera.com",
    gender: "Female",
    ip_address: "242.136.121.120",
  },
  {
    id: 2,
    first_name: "Giusto",
    last_name: "Dean",
    email: "gdean1@desdev.cn",
    gender: "Male",
    ip_address: "249.154.86.161",
  },
  {
    id: 3,
    first_name: "Hagan",
    last_name: "Curman",
    email: "hcurman2@woothemes.com",
    gender: "Male",
    ip_address: "205.13.147.27",
  },
  {
    id: 4,
    first_name: "Morena",
    last_name: "Mockford",
    email: "mmockford3@domainmarket.com",
    gender: "Female",
    ip_address: "3.237.166.127",
  },
  {
    id: 5,
    first_name: "Idelle",
    last_name: "Silversmidt",
    email: "isilversmidt4@businesswire.com",
    gender: "Female",
    ip_address: "117.173.39.120",
  },
  {
    id: 6,
    first_name: "Anet",
    last_name: "Hurford",
    email: "ahurford5@reuters.com",
    gender: "Female",
    ip_address: "160.230.72.78",
  },
  {
    id: 7,
    first_name: "Kristel",
    last_name: "Waleran",
    email: "kwaleran6@last.fm",
    gender: "Female",
    ip_address: "56.34.255.173",
  },
  {
    id: 8,
    first_name: "Laurel",
    last_name: "Ramalhete",
    email: "lramalhete7@xing.com",
    gender: "Female",
    ip_address: "73.145.21.72",
  },
  {
    id: 9,
    first_name: "Kara-lynn",
    last_name: "Troman",
    email: "ktroman8@cyberchimps.com",
    gender: "Bigender",
    ip_address: "7.59.187.242",
  },
  {
    id: 10,
    first_name: "Herb",
    last_name: "Labbett",
    email: "hlabbett9@so-net.ne.jp",
    gender: "Male",
    ip_address: "89.68.103.213",
  },
];
