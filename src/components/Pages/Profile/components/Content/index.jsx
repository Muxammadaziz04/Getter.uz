import ArticleCard from 'components/UI/ArticleCard';
import cls from './Content.module.scss'

const Content = ({ articles }) => {
    return (
        <div className={cls.content}>
            {
                articles?.articles?.length > 0 && articles?.articles?.map(atc =>
                    < ArticleCard
                        key={atc?.id}
                        title={atc?.title}
                        image={atc?.avatar?.url}
                        avatar={articles?.avatar?.url}
                        fullName={articles?.name}
                        job={articles?.position?.title}
                        likes={atc?.likesCount}
                        comments={0}
                        date={atc?.date.slice(0, 10)}
                        hashtags={atc?.tags}
                        id={atc?.id}
                    />
                )
            }
        </div>
    );
}

export default Content;
