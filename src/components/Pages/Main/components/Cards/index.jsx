import Container from "components/UI/Container";
import ProductCard from "components/UI/ProductCard";
import Flex from "components/UI/Flex";
import cls from './Cards.module.scss'
import { portfolio } from "./data";
import { useRouter } from "next/router";
import { GetWebSite } from "services/webSites";
import { useEffect, useState } from "react";
import { GetPortfolio } from "services/portfolio";
import { GetArticles } from "services/articles";


const Cards = () => {
    const router = useRouter()
    const query = router?.asPath.split('?')?.[1]?.split('=')?.[1]
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            if (query === undefined) {
                const data = await GetWebSite();
                setData(data?.items)

            }
            if (query === 'portfolio') {
                const data = await GetPortfolio()
                setData(data?.items)
            }
        }
        fetchData()
            .then((err) => {
                console.log(err);
            })

    }, [query]);

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
