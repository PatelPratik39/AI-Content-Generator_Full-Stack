import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';


interface props {
  aiOutput: string
}

const OutputSection = ({ aiOutput }: props) => {
  const editorRef: any = useRef<any>(null);

  // useEffect(() => {
  //   if (editorRef.current) {
  //     const editorInstance = editorRef.current.getInstance();
  //     if (editorInstance) {
  //       editorInstance.setMarkdown(aiOutput);
  //     }
  //   }
  // }, [aiOutput]);

  useEffect(() => {
    const editorReference = editorRef.current.getInstance();
    editorReference.setMarkdown(aiOutput);
    editorReference.changeMode('wysiwyg');
 
  }, [aiOutput])

  return (
    <>
      <div className='bg-white border shadow-lg rounded-lg'>
        <div className='flex justify-between items-center p-5 '>
          <h2 className='font-medium text-lg'>Your Result</h2>
          <Button className='flex items-center gap-2'><Copy className='w-4 h-4' />Copy</Button>
        </div>
        <Editor
          ref={editorRef}
          initialValue="Your content will appear here 🤗"
          previewStyle="vertical"
          height="600px"
          initialEditType="WYSIWYG"
          useCommandShortcut={true}
          // onChange={() => {
          //   console.log(editorRef.current.getInstance().getMarkdown());
          // }}
        />
      </div>
    </>
  )
}

export default OutputSection