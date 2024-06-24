import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";

export default function JsonViewerComponent(props: { code: string }) {
    return (
        <SyntaxHighlighter language="json" style={dracula} className="console" wrapLines={true} wrapLongLines={true}>
            { props.code }
        </SyntaxHighlighter>
    );
}