import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Checkbox, LengthSlider, Footer } from './components';

function App() {
  const [password, setPassword] = useState('fdrthrdv');
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) string += '0123456789';
    if (charAllowed) string += '`~!@#$%^&*()_-+={}[]|<>?/';

    for (let i = 0; i < length; i++) {
      pass += string.charAt(Math.floor(Math.random() * string.length + 1));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="grid h-screen w-screen place-items-center bg-gray-900">
      <header className="flex h-full items-start pt-8">
        <div className="text-center text-7xl text-white">Password Generator</div>
      </header>

      <main className="mx-4 grid h-full w-full max-w-lg grid-rows-3 gap-4 rounded-xl bg-gray-700 p-4">
        <div className="flex items-center justify-center rounded-xl">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-2/3 rounded-full bg-emerald-400 px-6 py-3 text-center font-semibold text-gray-600"
          />
        </div>

        <div className="flex flex-wrap items-start justify-center gap-4 rounded-xl">
          <Button buttonText={'generate'} handleClick={generatePassword} />
          <Button buttonText={'copy'} handleClick={copyPassword} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 rounded-xl bg-gray-600 ">
          <LengthSlider label={'length'} length={length} handleClick={setLength} />
          <Checkbox label={'numbers'} value={numberAllowed} handleClick={setNumberAllowed} />
          <Checkbox label={'characters'} value={charAllowed} handleClick={setCharAllowed} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
