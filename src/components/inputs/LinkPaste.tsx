import React, { ChangeEvent } from "react";
import { IconLink } from "@tabler/icons-react";

interface LinkPasteProps {
  handleLinkPaste: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LinkPaste: React.FC<LinkPasteProps> = ({ handleLinkPaste }) => {
  return (
    <label className="cursor-pointer">
      <input
        type="text"
        className="hidden"
        onChange={handleLinkPaste}
        placeholder="Paste URL"
      />
      <IconLink size={22} />
    </label>
  );
};

export default LinkPaste;