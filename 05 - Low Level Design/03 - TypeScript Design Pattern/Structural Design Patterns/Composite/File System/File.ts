import { FileSystemComponent } from "./interface";

export class File implements FileSystemComponent {
  constructor(private name: string) {}

  show(indent: string = ""): void {
    console.log(`${indent}- File: ${this.name}`);
  }
}
