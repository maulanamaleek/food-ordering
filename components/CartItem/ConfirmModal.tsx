import classes from "./classes";

interface IConfirmModal {
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({
  onClose,
  onConfirm,
}: IConfirmModal) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.modalContainer}>
        <p className="text-center">Decrement amount to 0 will remove this food from your cart</p>

        <div className="flex gap-5 items-center justify-center">
          <button
            onClick={onClose}
            className={classes.cancelBtn}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={classes.confirmBtn}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal