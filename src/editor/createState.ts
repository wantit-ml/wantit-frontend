import { EditorState } from 'prosemirror-state';
import { defaultMarkdownParser, schema } from 'prosemirror-markdown';
import { keymap } from 'prosemirror-keymap';

import { redo, undo } from 'prosemirror-history';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { exampleSetup } from 'prosemirror-example-setup';

export const createState = (content: string) =>
  EditorState.create({
    doc: defaultMarkdownParser.parse(content),
    schema,
    plugins: [
      ...exampleSetup({ schema }),
      keymap({
        'Mod-z': undo,
        'Shift-Mod-z': redo,
      }),
    ],
  });
