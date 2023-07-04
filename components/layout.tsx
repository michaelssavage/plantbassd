import { ReactNode, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Modal, SearchModal } from "components/Modal";
import { getAllPosts } from "utils/getAllPosts";
import { sortByDate } from "utils";
import { AllPostProps } from "types/frontmatter";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  files?: AllPostProps[];
}

export default function Layout({ children, files }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sidebar setIsOpen={setIsOpen} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Search App">
        <SearchModal files={files} />
      </Modal>
      <main>{children}</main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllPosts();

  return {
    props: {
      files: files.sort(sortByDate).reverse(),
    },
  };
};
