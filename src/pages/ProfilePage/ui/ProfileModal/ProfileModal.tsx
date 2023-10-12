import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { ProfileForm } from '../ProfileForm';

interface ProfileModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal = ({
  className = '',
  isOpen,
  onClose,
}: ProfileModalProps) => (
  <Modal
    className={classNames('', {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <ProfileForm onClose={onClose} />
    </Suspense>
  </Modal>
);
