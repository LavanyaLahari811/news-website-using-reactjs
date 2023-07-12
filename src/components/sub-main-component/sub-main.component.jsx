const DisplayCard = ({ article }) => {
  const { title, urlToImage, description, source } = article;

  const renderArticle = () => {
    if (urlToImage) {
      return (
        <div className="article">
          
          <h1>{title}</h1>
          <img alt={source.name} src={urlToImage} />
          <p>{description}</p>
          <p>{source.name}</p>
        </div>
      );
    }
    return null;
  };

  return <div className="displaycard">{renderArticle()}</div>;
};
export default DisplayCard;
