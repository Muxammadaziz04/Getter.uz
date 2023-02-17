import ArticleCard from 'components/UI/ArticleCard';
import { artciles } from '../../data';
import cls from './Content.module.scss'

const Content = () => {
    return (
        <div className={cls.content}>
           {
            artciles?.length > 0 && artciles.map(atc => 
                <ArticleCard 
                    key={atc.id}
                    title={atc.title}
                    image={atc.image}
                    avatar={atc.avatar}
                    fullName={atc.fullName}
                    job={atc.job}
                    likes={atc.likes}
                    comments={atc.comments}
                    date={atc.comments}
                    hashtags={atc.hashtags}
                />    
            )
           }
        </div>
    );
}

export default Content;
