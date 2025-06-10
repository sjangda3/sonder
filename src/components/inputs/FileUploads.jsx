import React from "react";
import {IconPaperclip} from "@tabler/icons-react";

const FileUploads = ({handleFileUpload}) => {
    return (
        <label htmlFor="file-upload" className="cursor-pointer">
            <IconPaperclip size={21}/>
            <input 
                id="file-upload" 
                type="file" 
                onChange={handleFileUpload} 
                className="hidden"
            />
        </label>
    );
}

export default FileUploads;