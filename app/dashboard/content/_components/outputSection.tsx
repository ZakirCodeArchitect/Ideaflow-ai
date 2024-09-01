import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface props{
    aiOutput:string;
}

function outputSection({aiOutput}:props) {

    const editorRef:any=useRef();

    useEffect(()=>{
        const editorInstance=editorRef.current.getInstance();
        editorInstance.setMarkdown(aiOutput);
    },[aiOutput])

  return (
    
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='font-medium text-lg'>Your Result</h2>
            <Button className='flex gap-2'
            onClick={()=>navigator.clipboard.writeText(aiOutput)}
            ><Copy className='w-4 h-4'/></Button>
        </div>
      <Editor
      ref={editorRef}
        initialValue="Your Result will appear here"
        // previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
    />
    </div>
  )
}

export default outputSection
