import { BsLayers, BsMenuButtonWide } from "react-icons/bs";
import type { FeatCard, PropertyCard, sliderImg } from "./types";
import { MdOutlineMap } from "react-icons/md";


const heroImg = "https://framerusercontent.com/images/MdceQMLsNQ9bPL66TbIzc7gU8Q.png?scale-down-to=2048&width=3020&height=1609";
const squareImg1 = "https://framerusercontent.com/images/jPeZmy7YCbe9AVjGZO5M98xuc.png?scale-down-to=1024&width=1200&height=686";
const squareImg2 = "https://framerusercontent.com/images/7vrbQVhnM9SxokAtpslwtafiSsI.png?scale-down-to=1024&width=1200&height=686"
const logo = "https://framerusercontent.com/images/nyoKZsnNef6bEnFPj910OUrj1SA.svg?scale-down-to=512&width=530&height=255";
const user1 = "https://framerusercontent.com/images/ATdqAfiJi00GYDOvVfF7D1LTm0Y.jpg?width=319&height=479"

const slider: sliderImg[] = [
    {
        id: 1,
        img: "https://framerusercontent.com/images/oN7LI1gaIceUaUtti1ONL0tdas.png?scale-down-to=1024&width=1200&height=686"
    },
    {
        id: 2,
        img: "https://framerusercontent.com/images/1EL8XRu3Qioj48mPCC6afFQRv0.png?scale-down-to=1024&width=1200&height=686"
    },
    {
        id: 3,
        img: "https://framerusercontent.com/images/jPeZmy7YCbe9AVjGZO5M98xuc.png?scale-down-to=1024&width=1200&height=686"
    },
    {
        id: 4,
        img: "https://framerusercontent.com/images/7vrbQVhnM9SxokAtpslwtafiSsI.png?scale-down-to=1024&width=1200&height=686"
    }
];

const featCards: FeatCard[] = [
    {
        icon: BsMenuButtonWide,
        title: "Exceptional Craftsmanship",
        description: "Meticulously crafted with top-tier materials for unmatched quality."
    },
    {
        title: "Innovative Living",
        image: "https://framerusercontent.com/images/7vrbQVhnM9SxokAtpslwtafiSsI.png?width=1200&height=686",
        description: "Luxury meets efficiency with smart tech and eco features."
    },
    {
        title: "Smooth Journey",
        image: "https://framerusercontent.com/images/1EL8XRu3Qioj48mPCC6afFQRv0.png?width=1200&height=686",
        description: "From start to finish, we ensure a seamless process, dedicated to realizing your vision."
    },
    {
        icon: MdOutlineMap,
        title: "Prime Locations",
        description: "Nestled in serene settings, Haven homes provide privacy and breathtaking views."
    },
    {
        icon: BsLayers,
        title: "Adaptable Design",
        description: "Our designs adapt to your needs for lasting functionality."
    },
    {
        title: "Custom design",
        image: "https://framerusercontent.com/images/KhlGzjqduOyluPddUqU1cV3ji5M.png?width=1200&height=686",
        description: "Each Haven home is a unique creation, tailored to fit your lifestyle and taste."
    },
]

const PropertyCards: PropertyCard[] = [
    {
        image: "https://framerusercontent.com/images/7vrbQVhnM9SxokAtpslwtafiSsI.png?width=1200&height=686",
        title: "Alexandria",
        location: "Grand Harbor",
        price: 4000,
        beds: 4,
        baths: 2,
        link: "#"
    },
    {
        image: "https://framerusercontent.com/images/KhlGzjqduOyluPddUqU1cV3ji5M.png?width=1200&height=686",
        title: "Bilvox",
        location: "Silver Heights",
        price: 4000,
        beds: 4,
        baths: 2,
        link: "#"
    },
    {
        image: "https://framerusercontent.com/images/zQ2l2P38s9uqF1RZUpLVJ6acv5M.png?width=1200&height=686",
        title: "The  Giose",
        location: "East Heaven",
        price: 4000,
        beds: 4,
        baths: 2,
        link: "#"
    },
    {
        image: "https://framerusercontent.com/images/jPeZmy7YCbe9AVjGZO5M98xuc.png?scale-down-to=1024&width=1200&height=686",
        title: "Leoxa Retreat",
        location: "Crown Valley",
        price: 4000,
        beds: 4,
        baths: 2,
        link: "#"
    },

]



export { heroImg, squareImg1, squareImg2, logo, slider, user1, featCards, PropertyCards };