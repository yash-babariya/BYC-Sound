import { useParams } from "react-router-dom";

const Category = () => {
    const { category } = useParams();

    let content;
    switch (category) {
        case 'personalize':
            content = <h1>Personalize</h1>;
            break;
        case 'portable-speaker':
            content = <h1>Portable Speaker</h1>;
            break;
        case 'home-audio':
            content = <h1>Home Audio</h1>;
            break;
        case 'headphones-and-earbuds':
            content = <h1>Headphones and Earbuds</h1>;
            break;
        case 'gaming':
            content = <h1>Gaming</h1>;
            break;
        case 'car-marine':
            content = <h1>Car & Marine</h1>;
            break;
        default:
            content = <h1>Not Found</h1>;
    }

    return content;
};

export default Category;