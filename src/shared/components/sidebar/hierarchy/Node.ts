export default interface Node {
    id: string;
    name: string;
    children?: Node[];
}