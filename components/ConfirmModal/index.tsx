import classes from "./classes";

export interface IConfirmModalProps {
  show: boolean;
  cancelText?: string;
  confirmText?: string;
  description: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmModal = ({
  show,
  confirmText,
  cancelText,
  description,
  onClose,
  onConfirm,
}: IConfirmModalProps) => {

  if (!show) {
    return null;
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.modalContainer}>
        <p className="text-center">{description}</p>

        <div className={classes.confirmActions}>
          {!!cancelText && (
            <button
              onClick={onClose}
              className={classes.cancelBtn}
            >
              {cancelText}
            </button>
          )}

          {!!confirmText && (
            <button
              onClick={onConfirm}
              className={classes.confirmBtn}
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;