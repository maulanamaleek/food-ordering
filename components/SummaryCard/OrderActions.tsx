'use client';
import { formatCurrency } from "@/utils";
import classes from "./classes";
import { useState } from "react";
import ConfirmModal from "../ConfirmModal";
import { useRouter } from "next/navigation";

interface IOrderActionsProps {
  total: number;
  onSuccess: () => void;
}

const DEFAULT_MODAL = {
  show: false,
  confirmText: '',
  description: '',
};
const OrderActions = ({
  total,
  onSuccess,
}: IOrderActionsProps) => {
  const [modal, setModal] = useState(DEFAULT_MODAL);
  const router = useRouter();

  const onCancel = () => {
    router.back();
  };

  const onClickOrder = () => {
    setModal({
      show: true,
      confirmText: 'Order',
      description: 'Make sure to re-check your order summary. Order now?',
    });
  };

  const onConfirmOrder = () => {
    setModal(DEFAULT_MODAL);
    onSuccess();
  };
  return (
    <>
      <div className={classes.actionsContainer}>
        <div className="flex justify-between">
          <h3>Total</h3>
          <span className="font-semibold text-orange-600">{formatCurrency(total, 'IDR')}</span>
        </div>
        {/* TODO: add confirm modal, cancel -> cart, order now -> order success page */}
        <div className="flex justify-between gap-5">
          <button onClick={onCancel} className={classes.cancelBtn}>Cancel</button>
          <button onClick={onClickOrder} className={classes.confirmBtn}>Order Now</button>
        </div>
      </div>

      {modal.show && <ConfirmModal description={modal.description} onConfirm={onConfirmOrder} onClose={() => setModal(DEFAULT_MODAL)} />}
    </>
  );
};

export default OrderActions;