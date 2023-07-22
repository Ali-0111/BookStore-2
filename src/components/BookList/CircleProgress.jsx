const ContainerStyle = {
  width: '5.625rem',
  height: '5.62rem',
  padding: '0.62rem 0.625rem 0.75rem 0.75rem',
};

const circlWithBackground = {
  width: '98%',
  height: '98%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'conic-gradient(#307bbe 0%, #307bbe 70%,#e8e8e8 70%)',
  borderRadius: '50%'
};

const middleCircle = {
  width: 'calc(100% - 10px)',
  height: 'calc(100% - 10px)',
  borderRadius: '50%',
  backgroundColor: 'white'
}
const ProgressBar = () => {
  return (
    <div className="wrapper max-xs:h-[3.5rem] max-xs:w-[3.5rem]" style={ContainerStyle}>
      <div className="circleWithBackground" style={circlWithBackground}>
        <div className="middleCircle" style={middleCircle}>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
