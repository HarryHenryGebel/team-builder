import React, {useState} from 'react';
import { IconButton,
         Paper,
         Table,
         TableBody,
         TableCell,
         TableContainer,
         TableHead,
         TableRow } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import EntryDialog from './EntryDialog';

export default function MembersDisplay (props) {
  const {deleteMember, teamMembers, updateMember} = props,
        [isDialogOpen, setIsDialogOpen] = useState(false),
        [member, setMember] = useState();


  // don't show table at all if there are no members
  if (teamMembers.length === 0)
    return (null);

  function showDialog(member) {
    setMember(member);
    setIsDialogOpen(true);
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <IconButton onClick={() => showDialog(member)}>
                    <EditOutlinedIcon/>
                  </IconButton>
                  <IconButton onClick={() => deleteMember(member)}>
                    <DeleteForeverOutlinedIcon/>
                  </IconButton>
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EntryDialog isEdit
                   isOpen={isDialogOpen}
                   member={member}
                   setIsOpen={setIsDialogOpen}
                   updateMember={updateMember}/>
    </div>
  );
}

//  LocalWords:  EditOutlined DeleteForeverOutlined EntryDialog
