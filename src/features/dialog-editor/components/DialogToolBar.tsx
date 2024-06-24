import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Brush from '@mui/icons-material/Brush';
import {AddBox, Redo, Undo} from "@mui/icons-material";

export default function DialogToolBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Stack direction="row" spacing={2}>
                        <IconButton>
                            <AddBox/>
                        </IconButton>
                        <IconButton>
                            <Brush/>
                        </IconButton>
                        <IconButton>
                            <Undo/>
                        </IconButton>
                        <IconButton>
                            <Redo/>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}