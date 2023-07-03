import { IConfirmModalProps } from "@/components/ConfirmModal";

export const DEFAULT_MODAL: IConfirmModalProps = {
  description: '',
  show: false,
};

export const DEFAULT_ERROR_MODAL: IConfirmModalProps = {
  description: 'There is an Error while fetching your request',
  show: true,
  confirmText: 'Close',
};