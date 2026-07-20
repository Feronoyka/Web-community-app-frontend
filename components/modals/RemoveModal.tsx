type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function RemoveModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return <div className='bg-white absolute '></div>;
}

export default RemoveModal;
