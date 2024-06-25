import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useLocation} from "react-router-dom";
import HierarchyViewer from "./HierarchyViewer";

export default function SidebarTopMenuComponent() {
    const [value, setValue] = React.useState('1');
    const location = useLocation();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    if (location.pathname === '/level-editor') {
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Assets" value="1" />
                            <Tab label="Hierarchy" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio harum illo perferendis, perspiciatis quam quia sequi. Repellat sapiente, voluptas.
                    </TabPanel>
                    <TabPanel value="2">
                        <HierarchyViewer filePath={"./data/levels.json"}/>
                    </TabPanel>
                </TabContext>
            </Box>
        );
    } else if(location.pathname === '/npc-editor') {
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Assets" value="1" />
                            <Tab label="Hierarchy" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio harum illo perferendis, perspiciatis quam quia sequi. Repellat sapiente, voluptas.
                    </TabPanel>
                    <TabPanel value="2">
                        <HierarchyViewer filePath={"./data/npcs.json"}/>
                    </TabPanel>
                </TabContext>
            </Box>
        );
    } else if(location.pathname === '/dialog-editor') {
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Hierarchy" value="1" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <HierarchyViewer filePath={"./data/dialogs.json"}/>
                    </TabPanel>
                </TabContext>
            </Box>
        );
    } else if(location.pathname === '/quest-editor') {
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Hierarchy" value="1" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <HierarchyViewer filePath={"./data/quests.json"}/>
                    </TabPanel>
                </TabContext>
            </Box>
        );
    } else if(location.pathname === '/item-editor') {
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Assets" value="1" />
                            <Tab label="Hierarchy" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio harum illo perferendis, perspiciatis quam quia sequi. Repellat sapiente, voluptas.
                    </TabPanel>
                    <TabPanel value="2">
                        <HierarchyViewer filePath={"./data/items.json"}/>
                    </TabPanel>
                </TabContext>
            </Box>
        );
    } else {
        return (
          <></>
        );
    }
}