import { bigDataProjects } from "./projects/bigData";
import { mobileProjects } from "./projects/mobile";
import { webProjects } from "./projects/web";
import { academicProjects } from "./projects/academic";

export const projects = [
    ...mobileProjects,
    ...bigDataProjects,
    ...webProjects,
    ...academicProjects,
];
