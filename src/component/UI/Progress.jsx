import Cat from '../../image/homeCat.png';

export default function Progress({ value = 25, cat = true, text = `${~~value}%` }) {
  return (
    <div className={`progress progress-line${cat ? ' cat' : ''}`}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {text}
        {cat && <img className="cat" src={Cat} alt="cat" />}
      </div>
    </div>
  );
}
