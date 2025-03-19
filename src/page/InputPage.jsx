import { useState } from 'react';
// hook
import { useInternalRouter } from '../hook/useInternalRouter';
// component
import NetworkGraph from '@/src/component/UI/NetworkGraph';
import AppInput from '@/src/component/UI/AppInput';
import Button from '@/src/component/UI/Button';

export default function InputPage() {
  const [name, setName] = useState('');
  const router = useInternalRouter();

  return (
    <div className="inputPage-wrapper">
      <NetworkGraph />

      <h2 className="name-input-title">
        두 글자 이내 이름을<br></br> 입력해주세요!
      </h2>
      <AppInput
        onChange={({ target: { value } }) => {
          if (value.length > 2) return;
          setName(value);
        }}
        value={name}
        placeholder="ex) 하나"
        maxLength="2"
      />
      <Button onClick={() => router.push('/test', { state: { name } })} type="start-button" text="검사 시작" />
    </div>
  );
}
