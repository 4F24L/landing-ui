import type { IconType } from "react-icons";

export interface sliderImg {
    id: number;
    img: string;
}

export interface FeatCard {
    icon? : IconType
    title: string
    image?: string
    description: string
}

export interface PropertyCardType {
    image: string
    title: string
    location: string
    price: number
    beds: number
    baths: number
    link: string
}

export interface BlogCardType {
    image: string
    title: string
    tag: string
    link: string
}
export interface faqType {
    question: string
    answer: string
}