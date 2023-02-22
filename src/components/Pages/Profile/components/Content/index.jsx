import ArticleCard from 'components/UI/ArticleCard';
import cls from './Content.module.scss'

const Content = ({articles = []}) => {
    return (
        <div className={cls.content}>
           {
            articles?.length > 0 && articles.map(atc => 
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
                    id={atc.id}
                />    
            )
           }
        </div>
    );
}

export default Content;
