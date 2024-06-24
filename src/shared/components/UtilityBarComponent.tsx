import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ConsoleComponent from "./ConsoleComponent";
import JsonViewerComponent from "./JsonViewerComponent";

export default function UtilityBarComponent() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Console" value="1" />
                        <Tab label="JSON Viewer" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1" className="console-container">
                    <ConsoleComponent code="
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium dicta fugiat iure minus mollitia, nostrum repellat tempora vitae.
                        Aut deserunt dolor dolore doloribus error impedit laborum minima sint temporibus voluptas.
                        Aperiam, autem illo iusto labore laudantium nemo nihil officiis perspiciatis recusandae rem?
                        Asperiores facere inventore, laborum maxime nesciunt soluta velit?
                    "/>
                </TabPanel>
                <TabPanel value="2" className="console-container">
                    <JsonViewerComponent code="
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eum hic obcaecati porro, possimus quas recusandae repudiandae soluta voluptatem?
                    Id ipsum maiores nam neque nesciunt pariatur quasi saepe?
                    Adipisci amet distinctio dolor dolores dolorum eos est eveniet fuga
                    fugit ipsa laboriosam numquam obcaecati perferendis perspiciatis quis sed tenetur,
                    totam veritatis vitae." />
                </TabPanel>
            </TabContext>
        </Box>
    );
}
