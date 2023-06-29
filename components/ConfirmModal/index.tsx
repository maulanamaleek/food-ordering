import classes from "./classes";

interface IConfirmModalProps {
  cancelText?: string;
  confirmText?: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  description,
  onClose,
  onConfirm,
}: IConfirmModalProps) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.modalContainer}>
        <p className="text-center">{description}</p>

        <div className={classes.confirmActions}>
          <button
            onClick={onClose}
            className={classes.cancelBtn}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={classes.confirmBtn}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;