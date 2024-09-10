import headphone1 from "../assets/images/headphone1.webp";
import headphone1_1 from "../assets/images/headphone1.1.webp";
import headphone1_2 from "../assets/images/headphone1.2.webp";
import headphone1_3 from "../assets/images/headphone1.3.jpg";
import headphone1_4 from "../assets/images/headphone1.4.jpg";
import headphone1_5 from "../assets/images/headphone1.5.jpg";
import headphone1_6 from "../assets/images/headphone1.6.jpg";
import headphone2 from "../assets/images/headphone2.webp";
import headphone2_1 from "../assets/images/headphone2.1.jpg";
import headphone2_2 from "../assets/images/headphone2.2.jpg";
import headphone2_3 from "../assets/images/headphone2.3.jpg";
import headphone2_4 from "../assets/images/headphone2.4.jpg";
import headphone2_5 from "../assets/images/headphone2.5.jpg";
import headphone2_6 from "../assets/images/headphone2.6.jpg";
import headphone3 from "../assets/images/headphone3.avif";
import headphone3_1 from "../assets/images/headphone3.1.webp";
import headphone3_2 from "../assets/images/headphone3.2.webp";
import headphone3_3 from "../assets/images/headphone3.3.webp";
import headphone3_4 from "../assets/images/headphone3.4.webp";
import headphone3_5 from "../assets/images/headphone3.5.webp";
import headphone4 from "../assets/images/headphone4.webp";
import headphone4_1 from "../assets/images/headphone4.1.webp";
import headphone4_2 from "../assets/images/headphone4.2.webp";
import headphone4_3 from "../assets/images/headphone4.3.webp";
import headphone4_4 from "../assets/images/headphone4.4.webp";
import headphone4_5 from "../assets/images/headphone4.5.webp";
import headphone4_6 from "../assets/images/headphone4.6.webp";
import headphone5 from "../assets/images/headphone5.avif";
import headphone5_1 from "../assets/images/headphone5.1.webp";
import headphone5_2 from "../assets/images/headphone5.2.webp";
import headphone5_3 from "../assets/images/headphone5.3.webp";
import headphone5_4 from "../assets/images/headphone5.4.webp";
import headphone5_5 from "../assets/images/headphone5.5.webp";



const categoryApi = [
    {
        category: "personalize",
        path: "/personalize",
        product: []
    },
    {
        category: "portable speaker",
        path: "/portable-speaker",
        product: []
    },
    {
        category: "home audio",
        path: "/home-audio",
        product: []
    },
    {
        category: "headphones and earbuds",
        path: "/headphones&earbuds",
        product: [
            {
                type: "Headphones",
                items: [
                    {
                        id: 1001,
                        headphoneImg: [headphone1, headphone1_1, headphone1_2, headphone1_3, headphone1_4, headphone1_5, headphone1_6],
                        name: "boAt Rockerz 550 FM ",
                        desc: "Wireless Headphone with 50mm dynamic drivers, Bluetooth v5.0, 500mAh battery, 20H Playback",
                        rating: "5.0",
                        review: "3",
                        offer: "33% OFF",
                        price: "4,999",
                        discountprice: "3,349",
                        mrp: "MRP(Inclusive of all taxes)",
                        fature: [
                            "50mm drivers",
                            "500mAh battery",
                            "Bluetooth v5.0",
                        ]
                    },
                    {
                        id: 1002,
                        headphoneImg: [headphone2, headphone2_1, headphone2_2, headphone2_3, headphone2_4, headphone2_5, headphone2_6],
                        name: "Rockerz 450 POLO",
                        desc: "Wireless Headphone with 50mm dynamic drivers, Bluetooth v5.0, 500mAh battery, 20H Playback",
                        rating: "4.9",
                        review: "3",
                        offer: "54% OFF",
                        price: "3,990",
                        discountprice: "1,849",
                        mrp: "MRP(Inclusive of all taxes)",
                        fature: [
                            "40mm drivers",
                            "400mAh battery",
                            "Bluetooth v4.2",
                        ]
                    },
                    {
                        id: 1003,
                        headphoneImg: [headphone3, headphone3_1, headphone3_2, headphone3_3, headphone3_4, headphone3_5],
                        name: "boAt Rockerz 425",
                        desc: "Wireless Bluetooth Headphone with 25 Hours Playback, ASAP Charge, 40mm Drivers",
                        rating: "4.9",
                        review: "22",
                        offer: "50% OFF",
                        price: "2,990",
                        discountprice: "1,499",
                        mrp: "MRP(Inclusive of all taxes)",
                        fature: [
                            "BEAST™ Mode",
                            "400mm drivers",
                            "Bluetooth v5.2",
                        ]
                    },
                    {
                        id: 1004,
                        headphoneImg: [headphone4, headphone4_1, headphone4_2, headphone4_3, headphone4_4, headphone4_5, headphone4_6],
                        name: "boAt Rockerz 551ANC",
                        desc: "Noise Cancelling Wireless Headphone, Upto 100 Hours Playback, 40mm Driver, ENx™ Technology, Custom-tuned EQ Mode",
                        rating: "5.0",
                        review: "1",
                        offer: "61% OFF",
                        price: "7,990",
                        discountprice: "3,089",
                        mrp: "MRP(Inclusive of all taxes)",
                        fature: [
                            "BEAST™ Mode",
                            "ENx™ Technology",
                            "Bluetooth v4.2",
                        ]
                    },
                    {
                        id: 1005,
                        headphoneImg: [headphone5, headphone5_1, headphone5_2, headphone5_3, headphone5_4, headphone5_5],
                        name: "boAt Rockerz 450R",
                        desc: "Wireless Bluetooth Headphones with 15 Hours Playback, HD Immersive Audio, 40mm Dynamic Driver",
                        rating: "4.9",
                        review: "11",
                        offer: "50% OFF",
                        price: "3,999",
                        discountprice: "1,199",
                        mrp: "MRP(Inclusive of all taxes)",
                        fature: [
                            "44mm drivers",
                            "Bluetooth v4.2",
                            "300mAh battery",
                        ]
                    },
                ]
            }
        ]
    },
    {
        category: "gaming",
        path: "/gaming",
        product: []
    },
    {
        category: "car & marine",
        path: "/car&marine",
        product: []
    },
    {
        category: "pro audio",
        path: "/pro-audio",
        product: []
    }
]

export default categoryApi;