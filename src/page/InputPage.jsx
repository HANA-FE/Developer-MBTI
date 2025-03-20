import { useState, useCallback } from 'react';
// hook
import { useInternalRouter } from '../hook/useInternalRouter';
// component
import NetworkGraph from '@/src/component/UI/NetworkGraph';
import AppInput from '@/src/component/UI/AppInput';
import Button from '@/src/component/UI/Button';

export default function InputPage() {
  const [name, setName] = useState('');
  const router = useInternalRouter();
  const goTest = useCallback(() => router.push('/test', { state: { name } }), [name, router]);

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
        onKeyDown={({ key }) => {
          if (key !== 'Enter') return;
          if (0 < name.length && name.length <= 2) goTest();
        }}
        value={name}
        placeholder="ex) 하나"
        maxLength="2"
      />
      <Button onClick={goTest} type="start-button" text="검사 시작" />
    </div>
  );
}
