import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

export default DeleteModal;

function DeleteModal(props: any) {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.trigger}
    >
      <Modal.Content>
        <Modal.Description>
          <Header>メモの削除</Header>
          <p>メモを削除してもよろしいですか？</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={() => setOpen(false)}>
          キャンセル
        </Button>
        <Button icon="trash" negative onClick={props.onDelete}>
          削除します
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
