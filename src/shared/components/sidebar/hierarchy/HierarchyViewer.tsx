import {SetStateAction, useEffect, useState} from "react";
import {JsonHierarchy} from "./JsonHierarchy";
import {Box, Typography, CircularProgress, List, ListItem, ListItemText} from "@mui/material";
import Node from './Node';

export default function HierarchyViewer(props: {filePath: string}) {
    const [hierarchy, setHierarchy] = useState<Node | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadHierarchy = async () => {
            try {
                const response = await fetch(props.filePath);
                const jsonData = await response.json();
                const jsonHierarchy = new JsonHierarchy(jsonData);
                setHierarchy(jsonHierarchy.getHierarchy());
            } catch (error) {
                console.error('Error loading JSON data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadHierarchy();
    }, [props.filePath]);

    const renderNode = (node: Node) => (
        <List component="div" disablePadding key={node.id}>
            <ListItem>
                <ListItemText primary={node.name} />
            </ListItem>
            {node.children && node.children.length > 0 && (
                <List component="div" disablePadding>
                    {node.children.map(child => renderNode(child))}
                </List>
            )}
        </List>
    );

    return (
        <Box sx={{ flexGrow: 1, padding: 0 }}>
            {loading ? (
                <CircularProgress />
            ) : (
                <List component="nav">
                    {hierarchy ? renderNode(hierarchy) : <Typography>No data found.</Typography>}
                </List>
            )}
        </Box>
    );
}