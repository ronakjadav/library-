/* eslint-disable react-hooks/exhaustive-deps */
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";

const Notification = (props) => {
  const ischeckReducer =
    isEmpty(props.ischeckReducer) && props.ischeckReducer === false
      ? false
      : true;

  const hotelReducer = useSelector((state) => ({
    success_msg: state.hotelReducer.success_msg,
    error_msg: state.hotelReducer.error_msg,
  }));

  const customerReducer = useSelector((state) => ({
    success_msg: state.customerReducer.success_msg,
    error_msg: state.customerReducer.error_msg,
  }));

  const notificationSetting = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  /* hotelreducer Notification */
  useEffect(() => {
    if (hotelReducer.error_msg && ischeckReducer) {
      let message = hotelReducer.error_msg.split("E:");
      if (message.length > 1) {
        message = message[0];
      }
      toast.error(message, notificationSetting);
    }
  }, [hotelReducer.error_msg]);

  useEffect(() => {
    if (hotelReducer.success_msg && ischeckReducer) {
      toast.success(hotelReducer.success_msg, notificationSetting);
    }
  }, [hotelReducer.success_msg]);

  /* customerReducer Notification */
  useEffect(() => {
    if (customerReducer.error_msg && ischeckReducer) {
      let message = customerReducer.error_msg.split("E:");
      if (message.length > 1) {
        message = message[0];
      }
      swal("Oops!", message, "error");
    }
  }, [customerReducer.error_msg]);

  useEffect(() => {
    if (customerReducer.success_msg && ischeckReducer) {
      toast.success(customerReducer.success_msg, notificationSetting);
    }
  }, [customerReducer.success_msg]);

  /* Common internalmsg */
  useEffect(() => {
    if (props.internalMsg && props.internalMsg.message) {
      toast.error(props.internalMsg.message, notificationSetting);
    }
  }, [props.internalMsg]);

  return <ToastContainer />;
};

export default Notification;
