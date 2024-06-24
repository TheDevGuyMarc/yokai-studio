import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ConsoleComponent(props: { code: string }) {
    return (
        <SyntaxHighlighter language="bash" style={dracula} className="console" wrapLines={true} wrapLongLines={true}>
            { props.code }
        </SyntaxHighlighter>
    );
}