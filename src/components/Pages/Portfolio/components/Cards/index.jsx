
import Container from 'components/UI/Container';
import Flex from 'components/UI/Flex';
import ProductCard from 'components/UI/ProductCard';
import { useEffect, useState } from 'react';
import { GetPortfolio } from 'services/portfolio';
import cls from './Cards.module.scss'


const Cards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPortfolio()
            setData(data?.items)
        }
        fetchData()
            .then((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className={cls.wrapper}>
            <Container>
                <Flex rowCount={4} gap={20} direction='row'>
                    {
                        data?.length > 0 && data?.map(card =>
                            <ProductCard
                                key={card?.id}
                                image={card?.avatar?.url}
                                title={card?.title}
                                desc={card?.creator}
                                link={card?.link}
                            />
                        )
                    }
                </Flex>
            </Container>
        </div>
    );
}

export default Cards;
