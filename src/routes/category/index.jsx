import { useParams } from "react-router-dom";
import HeadphonesAndEarbuds from "../../components/categoryPages/headphonesAndEarbuds";
import DelayedSuspense from "../../common/loader/DelayedSuspense/DelayedSuspense";

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
        case 'headphones&earbuds':
            content = <DelayedSuspense><HeadphonesAndEarbuds /></DelayedSuspense>;
            break;
        case 'gaming':
            content = <h1>Gaming</h1>;
            break;
        case 'car&marine':
            content = <h1>Car & Marine</h1>;
            break;
        case 'pro-audio':
            content = <h1>pro Audio</h1>;
            break;
        default:
            content = <h1>Not Found</h1>;
    }

    return content;
};

export default Category;