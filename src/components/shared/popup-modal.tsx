import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';

type TPopupModalProps = {
  onConfirm?: () => void;
  loading?: boolean;
  renderModal: (onClose: () => void) => React.ReactNode;
};
export default function PopupModal({ renderModal }: TPopupModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={'!bg-background !px-1'}
      >
        <ScrollArea className="h-[80dvh] px-6  ">
          {renderModal(onClose)}
        </ScrollArea>
      </Modal>
    </>
  );
}
