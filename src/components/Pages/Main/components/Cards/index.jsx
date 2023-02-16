import Container from "components/UI/Container";
import ProductCard from "components/UI/ProductCard";
import Flex from "components/UI/Flex";
import cls from './Cards.module.scss'
import { portfolio } from "./data";

const Cards = () => {
    return (
        <div className={cls.wrapper}>
            <Container>
                <Flex rowCount={4} gap={20} direction='row'>
                    {
                        portfolio.length > 0 && portfolio.map(card =>
                            <ProductCard
                                key={card.id}
                                image={card.image}
                                title={card.title}
                                desc={card.desc}
                                link="https://getter.uz/"
                            />
                        )
                    }
                </Flex>
            </Container>
        </div>
    );
}

export default Cards;
