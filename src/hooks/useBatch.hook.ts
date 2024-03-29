import { useMemo, useState } from "react";
import { PostProps } from "types/frontmatter";

export const useBatch = (files: PostProps[], batch = 1) => {
  const [amount, setAmount] = useState(batch);

  const filesToShow = useMemo(() => {
    return files.slice(0, amount * 20);
  }, [files, amount]);

  const handleLoadMore = () => {
    setAmount((prev) => prev + 1);
  };

  const handleLoadAll = () => {
    setAmount(files.length);
  };

  return { filesToShow, handleLoadMore, handleLoadAll };
};
