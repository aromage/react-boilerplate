import React, { FC, useEffect } from 'react';
import NcModal from 'components/NcModal/NcModal';
import Tag from 'components/Tag/Tag';
import { TaxonomyType } from 'data/types';
import CustomTag from './CustomTag';

export interface ModalTagsProps {
  //   tags: TaxonomyType[];
  tags: string[];
}

const CustomModalTags: FC<ModalTagsProps> = ({ tags }) => {
  const renderModalContent = () => {
    return (
      <div className="flex flex-wrap dark:text-neutral-200">
        {tags?.map((tag, index) => (
          <CustomTag key={index} tag={tag} className="mr-2 mb-2" />
        ))}
      </div>
    );
  };

  return (
    <div className="nc-ModalTags">
      <NcModal
        contentExtraClass="max-w-screen-md"
        triggerText={
          <span>
            <span className="hidden sm:inline"></span> Tags
          </span>
        }
        modalTitle="해시태그 추천"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default CustomModalTags;
