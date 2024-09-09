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
                        id: "12899hy59590jkp",
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
                        id: "12ty89956550jkp",
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
                    }
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