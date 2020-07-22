import React from 'react';
import { Paper,
         Table,
         TableBody,
         TableCell,
         TableContainer,
         TableHead,
         TableRow } from '@material-ui/core';

export default function MembersDisplay (props) {
  const {teamMembers} = props;

  // don't show table at all if there are no members
  if (teamMembers.length === 0)
    return (null);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamMembers.map((member) => (
            <TableRow>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
