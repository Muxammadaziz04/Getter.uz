import ArticleCard from 'components/UI/ArticleCard';
import cls from './Content.module.scss'

const Content = ({ articles = [] }) => {
    return (
        <div className={cls.content}>
            {
                articles?.length > 0 && articles?.map(atc =>
                    <ArticleCard
                        key={atc?.id}
                        title={atc?.title}
                        image={atc?.avatar?.url || ""}
                        avatar={atc?.user?.avatar?.url || ""}
                        fullName={atc?.user?.name}
                        job={atc?.position?.title}
                        likes={atc?.likesCount}
                        comments={325}
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
