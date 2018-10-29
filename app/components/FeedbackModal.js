import React, {Component} from 'react';
import { Button, Modal, ModalHeader} from 'reactstrap';
// import FeedbackForm from './Form';
import FeedbackFormModal from './FormInModal';

class FeedbackModal extends Component {
    constructor(props) {
      super(props);
      this.closeDialog = this.closeDialog.bind(this);
    }
    closeDialog() {
      this.props.onClose();
    }  
    render() {   
      const { isOpen } = this.props;   
      return (
        <div>            
            <Modal isOpen={isOpen} toggle={this.closeDialog}>  
              <h2>Напишите нам, если вашего <br/> КСК нет в базе </h2>
              <FeedbackFormModal/>
            </Modal>
        </div>
      );
    }
  }
  
  export default FeedbackModal;