import React, { useCallback, useState } from "react";

import useLoginModal from "../../hooks/useLoginModal";
const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setisLoading(true);

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }, [loginModal]);

  return <div></div>;
};

export default LoginModal;
