import React from 'react';
import { useSelector } from 'react-redux';
import { transactionState } from '../../types/transactionController';
import InitiateView from '../../views/transact/InitiateView';
import AddFundsView from '../../views/transact/AddFundsView';
import CompleteView from '../../views/transact/CompleteView';
import FailedView from '../../views/transact/FailedView';
import ProcessedView from '../../views/transact/ProcessedView';
import ProccessingView from '../../views/transact/ProccessingView';
import type { RootState } from '../../redux/reducer';

const TransactionController = () => {
  const view = useSelector((state: RootState) => state.transactionState);
  const ViewComponent = React.useMemo(() => {
    switch (view) {
      case transactionState.initiated:
        return InitiateView;
      case transactionState.addFunds:
        return AddFundsView;
      case transactionState.complete:
        return CompleteView;
      case transactionState.failed:
        return FailedView;
      case transactionState.processed:
        return ProcessedView;
      case transactionState.processing:
        return ProccessingView;
      default:
        return InitiateView;
    }
  }, [view]);
  return <ViewComponent />;
};

export default TransactionController;
