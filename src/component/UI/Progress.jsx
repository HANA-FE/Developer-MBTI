import Cat from '../../image/homeCat.png';

export default function Progress({ value = 25, cat = true }) {
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
        {Math.min(~~value, 100)}%{cat && <img className="cat" src={Cat} alt="cat" />}
      </div>
    </div>
  );
}
