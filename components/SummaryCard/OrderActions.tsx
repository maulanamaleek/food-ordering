'use client';
import { formatCurrency } from "@/utils";
import classes from "./classes";
import { useState } from "react";
import ConfirmModal from "../ConfirmModal";
import { useRouter } from "next/navigation";
import { API_URL } from "@/constants/api";
import LoadingOverlay from "../LoadingOverlay";
import { DEFAULT_MODAL } from "@/constants";

interface IOrderActionsProps {
  total: number;
}

const OrderActions = ({
  total,
}: IOrderActionsProps) => {
  const [modal, setModal] = useState(DEFAULT_MODAL);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onCancel = () => {
    router.back();
  };

  const onClickOrder = () => {
    setModal({
      show: true,
      confirmText: 'Order',
      cancelText: 'Cancel',
      description: 'Make sure to re-check your order summary. Order now?',
      onConfirm: onConfirmOrder,
      onClose: () => setModal(DEFAULT_MODAL),
    });
  };

  const onConfirmOrder = () => {
    setModal(DEFAULT_MODAL);
    setIsLoading(true);

    fetch(API_URL.SUMMARY, { method: 'POST' })
      .then(() => {
        setModal({
          show: true,
          confirmText: 'See History',
          cancelText: 'Back to Home',
          description: 'Thanks for Ordering Food on Our App',
          onConfirm: () => {
            setModal(DEFAULT_MODAL);
            setIsLoading(true);
            router.replace('/history');
          },
          onClose: () => {
            setModal(DEFAULT_MODAL);
            setIsLoading(true);
            router.replace('/');
          },
        });
      })
      .catch(() => {
        setModal({
          show: true,
          confirmText: 'Close',
          cancelText: '',
          description: 'There is an Error when creating your order',
          onClose: () => setModal(DEFAULT_MODAL),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className={classes.actionsContainer}>
        <div className="flex justify-between">
          <h3>Total</h3>
          <span className="font-semibold text-orange-600">{formatCurrency(total, 'IDR')}</span>
        </div>

        <div className="flex justify-between gap-5">
          <button onClick={onCancel} className={classes.cancelBtn}>Cancel</button>
          <button onClick={onClickOrder} className={classes.confirmBtn}>Order Now</button>
        </div>
      </div>

      <ConfirmModal {...modal} />

      {isLoading && <LoadingOverlay />}
    </>
  );
};

export default OrderActions;