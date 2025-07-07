import type { ReactElement } from 'react';

export enum SelectedPage {
    Home = 'home',
    AboutUs = 'aboutus',
    Programs = 'programs',
    GetInvolved = 'getinvolved',
}

export interface BenefitType {
    icon: ReactElement;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}