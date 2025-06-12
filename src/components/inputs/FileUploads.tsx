import React, { ChangeEvent } from "react";
import { IconUpload } from "@tabler/icons-react";

interface FileUploadProps {
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ handleFileUpload }) => {
  return (
    <label className="cursor-pointer">
      <input
        type="file"
        className="hidden"
        onChange={handleFileUpload}
        accept=".txt,.rtf"
      />
      <IconUpload size={22} />
    </label>
  );
};

export default FileUpload;