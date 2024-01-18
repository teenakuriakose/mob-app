import React, {createContext, useState} from 'react';
import {withTheme} from '../../theme/index';
import {Modal} from 'react-native';
import AppBody from './containers/AppBody';

/**
 * @Component ModalContext
 */
export const ModalContextProvider: any = createContext({});
interface ModalDetails {
  show: boolean;
  content: () => JSX.Element | null;
  modalProps?: any;
  onClose?: () => {};
}

const ModalContext = (props: any) => {
  const [modal, setModal] = useState<ModalDetails>({
    show: false,
    content: () => null,
    modalProps: {},
    onClose: () => {},
  });

  const {children} = props;
  const {show, content, modalProps, onClose} = modal;
  const {modalMaxHeight = '80%', ...rest} = modalProps || {};

  const toggleAppModal = ({show, content, modalProps, onClose}: any) => {
    setModal({
      show: content ? true : show,
      content,
      modalProps,
      onClose,
    });
  };

  const onDismiss = () => {
    // pass custom functionality on modal close
    if (onClose) {
      onClose();
    }
    toggleAppModal({show: false});
  };

  const renderModal = () => (
    <Modal.AnimatedSlideUp
      backdrop
      topbar
      animationType="fade"
      onDismiss={onDismiss}
      visible={show}
      modalMaxHeight={modalMaxHeight}
      {...rest}>
      {content()}
    </Modal.AnimatedSlideUp>
  );

  return (
    <>
      <ModalContextProvider.Provider value={{toggleAppModal}}>
        {children}
      </ModalContextProvider.Provider>
      <AppBody flexGrow={0}>{show && renderModal()}</AppBody>
    </>
  );
};
export default withTheme(ModalContext);
