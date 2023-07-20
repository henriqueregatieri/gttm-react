import React, { CSSProperties } from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import styled from 'styled-components';

interface IProps {
  src: string;
  title?: string;
  style?: CSSProperties;
}

export const Image: React.FC<IProps> = ({ src, title, style }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Img src={src} alt={title} style={style} onClick={onOpen} />

      <Modal
        blockScrollOnMount={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <img src={src} alt={title} />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

const Img = styled.img`
  cursor: pointer;
`;
