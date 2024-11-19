import { useMemo } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IconClose } from '@/components/common/icons';
import Portal from './Portal';

type Props = {
  open: boolean;
  onToggle: (...args: any[]) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
  withPortal?: boolean;
  titleClassName?: string;
  hideClose?: boolean;
  closeButtonClassName?: string;
  descClassName?: string;
};

export type ModalProps = Props;

const Modal = ({
  title,
  description,
  open,
  onToggle,
  children,
  className,
  headerClassName,
  contentClassName,
  containerClassName,
  withPortal = true,
  hideClose,
  titleClassName,
  closeButtonClassName,
  descClassName,
}: Props) => {
  const handleContentClick = (e: any) => {
    e.stopPropagation();
  };

  const content = useMemo(
    () => (
      <div
        onClick={onToggle}
        className={twMerge(
          clsx('bg-black bg-opacity-30 fixed inset-x-0 inset-y-0 z-[100]', {
            hidden: !open,
          }),
          containerClassName
        )}
      >
        <div
          className={twMerge(
            'bg-white w-full max-w-[628px] rounded-t-xl lg:rounded-b-xl max-h-[calc(100vh-102px)] lg:max-h-[calc(100vh-112px)] absolute left-1/2 bottom-0 lg:bottom-auto lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 flex flex-col flex-grow p-8',
            className
          )}
          onClick={handleContentClick}
        >
          {!hideClose && (
            <button
              className={twMerge(
                'absolute top-3 right-3 bg-Gray10 w-10 h-10 flex items-center justify-center rounded-lg',
                closeButtonClassName
              )}
              onClick={onToggle}
            >
              <IconClose width={24} height={24} />
            </button>
          )}

          {title || description ? (
            <div className={twMerge('flex justify-between', headerClassName)}>
              <div className="space-y-4">
                <div
                  className={twMerge(
                    'text-2xl font-medium flex items-center text-Gray100 line-clamp-1 overflow-hidden text-ellipsis',
                    titleClassName
                  )}
                >
                  {title}
                </div>

                {description ? (
                  <div
                    className={twMerge(
                      'text-base leading-5 tracking-[0.28px] text-[#64748B]',
                      descClassName
                    )}
                  >
                    {description}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className={twMerge('overflow-auto mt-8', contentClassName)}>
            {children}
          </div>
        </div>
      </div>
    ),
    [
      children,
      className,
      containerClassName,
      title,
      description,
      onToggle,
      contentClassName,
      headerClassName,
      open,
      titleClassName,
      hideClose,
    ]
  );

  if (withPortal) {
    return open ? <Portal>{content}</Portal> : null;
  }

  return content;
};

export default Modal;
