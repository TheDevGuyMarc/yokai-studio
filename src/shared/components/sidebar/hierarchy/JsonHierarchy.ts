import {readFile} from "node:fs/promises";
import Node from "./Node";

export class JsonHierarchy {
    private root: Node | null = null;
    private _jsonData: any;

    constructor(jsonData: any) {
        this._jsonData = jsonData;
        this.root = this.buildHierarchy(this._jsonData, 'root');
    }

    private buildHierarchy(data: any, nodeName: string): Node {
        const node: Node = {
            id: Math.random().toString(36).substring(7), // Generiere eine zufällige ID
            name: nodeName,
            children: [],
        };

        if (typeof data === 'object' && data !== null) {
            if (Array.isArray(data)) {
                data.forEach((item, index) => {
                    node.children!.push(this.buildHierarchy(item, `Item ${index}`));
                });
            } else {
                Object.entries(data).forEach(([key, value]) => {
                    node.children!.push(this.buildHierarchy(value, key));
                });
            }
        } else {
            node.name += `: ${data}`;
        }

        return node;
    }

    getHierarchy(): Node | null {
        return this.root;
    }
}