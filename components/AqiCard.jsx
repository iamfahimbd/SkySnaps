const AqiCard = ({ children }) => {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-6">
      <div className="card">{children}</div>
    </div>
  );
};

export default AqiCard;
