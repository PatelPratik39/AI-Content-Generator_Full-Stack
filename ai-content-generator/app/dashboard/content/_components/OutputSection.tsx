import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = () => {
  const editorRef: any = useRef(null);
  return (
    <>
      <div className='bg-white border shadow-lg rounded-lg'>
        <div className='flex justify-between items-center p-5 '>
          <h2 className='font-medium text-lg'>Your Result</h2>
          <Button className='flex items-center gap-2'><Copy className='w-4 h-4'/>Copy</Button>
        </div>
        <Editor
          ref={editorRef}
          initialValue="Your content will appear here 🤗"
          previewStyle="vertical"
          height="600px"
          initialEditType="WYSIWYG"
          useCommandShortcut={true}
          onChange={() => { console.log(editorRef.current.getInstance().getMarkdown());
           }}
        />
      </div>
    </>
  )
}

export default OutputSection