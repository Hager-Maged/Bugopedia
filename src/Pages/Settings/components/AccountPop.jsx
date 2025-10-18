import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const AccountPop = ({ open, handleOpen, handleConfirmDelete }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Delete Account</DialogHeader>
      <DialogBody>
        Are You Sure You Want To Permanently Delete Your Account Including All
        Your Data ?
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleConfirmDelete}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AccountPop;
