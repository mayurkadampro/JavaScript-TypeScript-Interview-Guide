import { File } from "./File";
import { Directory } from "./Directory";

// Create files
const file1 = new File("file1.txt");
const file2 = new File("file2.txt");
const file3 = new File("image1.png");
const file4 = new File("image2.png");

// Create directories
const docs = new Directory("Documents");
const images = new Directory("Images");
const root = new Directory("Root");

// Compose structure
docs.add(file1);
docs.add(file2);

images.add(file3);
images.add(file4);

root.add(docs);
root.add(images);

// Display hierarchy
root.show();