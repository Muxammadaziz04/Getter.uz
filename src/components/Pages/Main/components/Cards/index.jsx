import Container from "components/UI/Container";
import ProductCard from "components/UI/ProductCard";
import Flex from "components/UI/Flex";

const Cards = () => {
    return (
        <Container>
            <Flex rowCount={5} gap={20} direction='row'>
                <ProductCard
                    image='/foto.png'
                    title='Swiss Dental'
                    desc='LLC OKS'
                    link="https://getter.uz/"
                />
                <ProductCard
                    image='/foto.png'
                    title='Swiss Dental'
                    desc='LLC OKS'
                    link="https://getter.uz/"
                />
                <ProductCard
                    image='/foto.png'
                    title='Swiss Dental'
                    desc='LLC OKS'
                    link="https://getter.uz/"
                />
                <ProductCard
                    image='/foto.png'
                    title='Swiss Dental'
                    desc='LLC OKS'
                    link="https://getter.uz/"
                />
                <ProductCard
                    image='/foto.png'
                    title='Swiss Dental'
                    desc='LLC OKS'
                    link="https://getter.uz/"
                />
            </Flex>
        </Container>
    );
}

export default Cards;
