import { bigDataProjects } from "./projects/bigData";
import { mobileProjects } from "./projects/mobile";
import { webProjects } from "./projects/web";

export const projects = [
    ...mobileProjects,
    ...bigDataProjects,
    ...webProjects
];