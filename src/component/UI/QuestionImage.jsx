import { QuestionUtils } from '../../constant/Question';

const QuestionImage = () => {
  const imagePath = QuestionUtils.getImagePath('PJ', '1');

  return (
    <div>
      <img src={imagePath} alt="" />
    </div>
  );
};

export default QuestionImage;
