import { CardCover } from "components/Card";
import { AllPostProps } from "types/frontmatter";

interface SearchModalProps {
  files?: AllPostProps[];
}

export const SearchModal = ({ files }: SearchModalProps) => {
  if (!files) return <></>;

  return (
    <div>
      <div className="row g-2">
        {files.map((story: AllPostProps) => (
          <CardCover
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story.frontmatter}
          />
        ))}
      </div>
    </div>
  );
};
