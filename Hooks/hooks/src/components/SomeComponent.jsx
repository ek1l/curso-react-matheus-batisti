/* eslint-disable react/display-name */
import { forwardRef, useRef, useImperativeHandle } from 'react';

const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = '';
        }
      },
    };
  });
  return (
    <div>
      <p>Insira no máximo 3 carácteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
});

export default SomeComponent;
