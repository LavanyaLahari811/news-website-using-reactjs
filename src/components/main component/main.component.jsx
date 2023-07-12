import DisplayCard from "../sub-main-component/sub-main.component";

const DisplayList = ({ news }) => {
  return (
    <div className="display-list">
      {news.map((article) => {
        return <DisplayCard article={article} />;
      })}
    </div>
  );
};

export default DisplayList;
