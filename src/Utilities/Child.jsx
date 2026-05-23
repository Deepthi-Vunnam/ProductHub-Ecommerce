export const Child = ({ url, title, price }) => {
  return (
    <div className="card">
      <img src={url} width="150px" height="200px" />
      <h5>{title}</h5>

      <span className="price">₹ {price}</span>
    </div>
  );
};