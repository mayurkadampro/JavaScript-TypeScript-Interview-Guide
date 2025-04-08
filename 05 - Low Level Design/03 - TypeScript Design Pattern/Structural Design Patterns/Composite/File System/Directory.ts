import { FileSystemComponent } from "./interface";

export class Directory implements FileSystemComponent {
    private children: FileSystemComponent[] = [];

    constructor(private name: string) { }

    add(component: FileSystemComponent): void {
        this.children.push(component);
    }

    show(indent: string = ""): void {
        console.log(`${indent}+ Directory: ${this.name}`);
        for (const child of this.children) {
            child.show(indent + "  ");
        }
    }
};
