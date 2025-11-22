import CloseIcon from "@mui/icons-material/Close";
import { VARIANTS } from "../../utils/constants";
import { VARIANT_STYLES } from "../../utils/styles";
import { Variants } from "../../types/types";
import React from "react";
import { ActionLinks, LinkProps } from "./ActionLinks/ActionLinks";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  primaryLink: LinkProps;
  secondaryLink?: LinkProps;
  variant?: Variants;
};

export const Modal = ({
  title,
  children,
  isOpen = false,
  primaryLink,
  secondaryLink,
  onClose,
  variant = VARIANTS.INFO,
}: ModalProps) => {
  const [displayModal, setDisplayModal] = React.useState(isOpen);
  const closeButtonRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setDisplayModal(isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    if (displayModal && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [displayModal]);

  if (!displayModal) return null;
  const styles = VARIANT_STYLES[variant];

  const handleClose = () => {
    onClose();
    setDisplayModal(false);
  };

  return (
    <dialog
      id="dialog"
      aria-labelledby="dialog-title"
      open={displayModal}
      className="fixed inset-0 size-auto overflow-y-auto z-1000 bg-transparent"
    >
      <>
        <div className="fixed inset-0 bg-black/60 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></div>
        <div
          tabIndex={0}
          className="flex min-h-full items-end justify-center sm:items-center"
          ref={closeButtonRef}
        >
          <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-max sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-4 sm:pb-4">
              <div className="flex items-start justify-between">
                <div className="flex">
                  <div
                    className={`mt-2 mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${styles.shadow} sm:mx-0 sm:size-10`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className={`size-6 ${styles.icon}`}
                    >
                      <path
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-4 sm:text-left">
                    <h3
                      id="dialog-title"
                      className="text-base font-semibold text-white"
                    >
                      {title}
                    </h3>
                    <div className="mt-2">
                      <div className="text-sm text-gray-400">{children}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start ml-5">
                  <button
                    aria-label="Close explanation and go back to generator"
                    onClick={handleClose}
                    className="cursor-pointer inline-flex w-full justify-end p-1 ml-5 text-sm font-semibold text-white hover:bg-white/20 sm:mt-0 sm:w-auto rounded-3xl bg-white/10"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </div>
            <ActionLinks
              primaryLink={{
                pathToNavigate: primaryLink.pathToNavigate,
                label: primaryLink.label,
              }}
              secondaryLink={{
                pathToNavigate: secondaryLink?.pathToNavigate,
                label: secondaryLink?.label,
                externalLink: true,
              }}
              variant={variant}
            />
          </div>
        </div>
      </>
    </dialog>
  );
};
