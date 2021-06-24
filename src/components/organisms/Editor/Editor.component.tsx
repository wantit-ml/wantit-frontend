import React, { useEffect, useRef } from 'react';

import { EditorView } from 'prosemirror-view';

import { createState } from 'editor';

const text = `
Обязанности:
- 

Требования:
- 

Условия:
-
`;

export const Editor = (): JSX.Element => {
  const viewHostRef = useRef<HTMLDivElement | null>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    const state = createState(text);

    if (viewHostRef.current) {
      viewRef.current = new EditorView(viewHostRef.current, { state });

      return viewRef.current.destroy;
    }

    return () => {
      //empty
    };
  }, []);

  return <div ref={viewHostRef} />;
};
