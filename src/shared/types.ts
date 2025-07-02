export enum SelectedPage {
    Home = 'home',
    AboutUs = 'aboutus',
    Projects = 'projects',
    GetInvolved = 'getinvolved',
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType{
    name: string;
    description: string;
    image: string;
}